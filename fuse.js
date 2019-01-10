const { join } = require('path');
const dotenv = require('dotenv');
const { TypeChecker } = require('fuse-box-typechecker');
const {
  FuseBox,
  EnvPlugin,
  QuantumPlugin,
  Sparky,
  JSONPlugin,
  CopyPlugin,
} = require('fuse-box');

const isProduction = process.env.NODE_ENV === 'prod';
const outputDir = 'build';

const testWatch = TypeChecker({
  tsConfig: './tsconfig.json',
  tsLint: './tslint.json',
  basePath: './',
  yellowOnLint: true,
  shortenFilenames: true,
  skipTsErrors: [2307],
});

if (!isProduction) {
  testWatch.runWatch('./src/');
}

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
    const { GOOGLE_MAPS_API_KEY, GOOGLE_ANALYTICS_ID } = process.env;

    return {
      target,
      homeDir: 'src/',
      output: join(outputDir, output),
      tsConfig: './tsconfig.json',
      useTypescriptCompiler: true,
      sourceMaps: target !== 'server',
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
          GOOGLE_MAPS_API_KEY,
          GOOGLE_ANALYTICS_ID,
        }),
        isProduction &&
          QuantumPlugin({
            bakeApiIntoBundle: name,
            treeshake: true,
            removeExportsInterop: false,
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

    return await fuse.run();
  }
}

Sparky.task('clean', async () => {
  await Sparky.src(outputDir)
    .clean(outputDir)
    .exec();
});

Sparky.task('default', ['clean', 'client', 'server']);

Sparky.task('server', async () => {
  await new Builder({
    name: 'server',
    target: 'server',
    instructions: '> [server/index.ts] +shared/**',
    runWhenCompleted: true,
    watchFilter: path => !path.match('.*.client'),
  }).init();
});

Sparky.task('client', async () => {
  await new Builder({
    name: 'client',
    instructions: '> client/index.tsx +shared/**',
    watchFilter: path => !path.match('.*.server'),
    output: join('public', '$name.js'),
  }).init();
});
