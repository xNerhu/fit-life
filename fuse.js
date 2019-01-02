const { join } = require('path');
const { writeFile, readFile } = require('fs').promises;
const { spawn } = require('child_process');
const {
  FuseBox,
  EnvPlugin,
  QuantumPlugin,
  Sparky,
  JSONPlugin,
  CopyPlugin,
} = require('fuse-box');
const dotenv = require('dotenv');

const isProduction = process.env.NODE_ENV === 'prod';
const outputDir = 'build';

dotenv.config();

class Builder {
  constructor(
    config = {
      target: '',
      name: '',
      output: '',
      instructions: '',
      watch: '',
      watchFilter,
      runWhenCompleted: false,
      devServerOptions: {},
    },
  ) {
    const { target, name, output } = config;
    this.config = config;
    this.fuseConfig = Builder.getFuseConfig(target, name, output);
  }

  static getFuseConfig(target, name, output = '$name.js') {
    return {
      target,
      homeDir: 'src/',
      output: join(outputDir, output),
      tsConfig: './tsconfig.json',
      useTypescriptCompiler: true,
      sourceMaps: target !== 'server',
      hash: isProduction,
      cache: !isProduction,
      plugins: [
        JSONPlugin(),
        CopyPlugin({
          files: ['*.woff2', '*.png', '*.svg', '*.jpg', '*.jpeg', '*.tff'],
          dest: target === 'server' ? 'public/assets' : 'assets',
          resolve: 'assets',
        }),
        EnvPlugin({
          NODE_ENV: isProduction ? 'production' : 'development',
          GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        }),
        isProduction &&
          QuantumPlugin({
            bakeApiIntoBundle: name,
            treeshake: true,
            removeExportsInterop: false,
            target: target,
            uglify: {
              es6: true,
            },
          }),
      ],
      alias: {
        '@client': '~/client/',
        '@server': '~/server/',
        '@shared': '~/shared/',
        '~': '~/',
      },
    };
  }

  async init() {
    const {
      name,
      target,
      instructions,
      watch,
      watchFilter,
      runWhenCompleted,
      devServerOptions,
    } = this.config;
    const fuse = FuseBox.init(this.fuseConfig);
    const app = fuse.bundle(name).instructions(instructions);

    if (!isProduction) {
      app.watch(watch, watchFilter);

      if (target !== 'server') {
        fuse.dev(devServerOptions);
        app.hmr();
      } else if (runWhenCompleted) {
        app.completed(proc => proc.start());
      }
    }

    const producer = await fuse.run();
    const bundle = producer.bundles.get(name);
    return bundle.context.output.lastGeneratedFileName;
  }
}

let bundles = {
  client: '',
  server: '',
};

Sparky.task('clean', async () => {
  await Sparky.src(outputDir)
    .clean(outputDir)
    .exec();
});

Sparky.task('default', ['clean', 'client', 'server']);

Sparky.task('server', async () => {
  const builder = new Builder({
    name: 'server',
    target: 'server',
    instructions: '> [server/index.ts] +shared/**',
    runWhenCompleted: true,
    watchFilter: path => !path.match('.*.client'),
  });

  const bundleFileName = await builder.init();
  bundles.server = bundleFileName;

  await writeFile(join(outputDir, 'bundles.json'), JSON.stringify(bundles));
});

Sparky.task('client', async () => {
  const builder = new Builder({
    name: 'client',
    instructions: '> client/index.tsx +shared/**',
    watchFilter: path => !path.match('.*.server'),
    output: join('public', '$name.js'),
  });

  const bundleFileName = await builder.init();
  bundles.client = bundleFileName;
});

Sparky.task('start', async () => {
  const bundles = await readFile(join(outputDir, 'bundles.json'));
  const json = JSON.parse(bundles);

  spawn('node', [join(outputDir, json.server)], {
    shell: true,
    stdio: 'inherit',
  });
});
