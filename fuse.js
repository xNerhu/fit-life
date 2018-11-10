const {
  FuseBox,
  EnvPlugin,
  QuantumPlugin,
  WebIndexPlugin,
  CopyPlugin,
} = require('fuse-box');

const production = process.env.NODE_ENV === 'dev' ? false : true;

const getConfig = (target, type, output = `build/$name.js`) => {
  return {
    homeDir: 'src/',
    cache: !production,
    target,
    output,
    tsConfig: './tsconfig.json',
    useTypescriptCompiler: true,
    plugins: [
      EnvPlugin({ NODE_ENV: production ? 'production' : 'development' }),
      production &&
        QuantumPlugin({
          bakeApiIntoBundle: type,
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
      '~': '~/',
    },
  };
};

const getClientConfig = () => {
  return Object.assign({}, getConfig('browser@es6', 'client'), {
    hash: production,
    sourceMaps: !production,
  });
};

const getWebIndexPlugin = name => {
  return WebIndexPlugin({
    template: `src/client/resources/pages/${name}.html`,
    path: './',
    scriptAttributes: ['defer'],
  });
};

const getCopyPlugin = () => {
  return CopyPlugin({
    files: ['*.woff2', '*.png', '*.svg', '*.jpg', '*.jpeg'],
    dest: 'assets',
    resolve: production ? './assets' : '/assets',
  });
};

const client = () => {
  const config = getClientConfig();

  config.plugins.push(getWebIndexPlugin('index'));
  config.plugins.push(getCopyPlugin());

  const fuse = FuseBox.init(config);
  const app = fuse.bundle('client').instructions('> client/index.tsx');

  if (!production) {
    fuse.dev({ port: 3000 });

    app.hmr().watch('client/**');
  }

  fuse.run();
};

const server = () => {
  const fuse = FuseBox.init(getConfig('server', 'server', `$name.js`));
  const app = fuse.bundle('server').instructions('> [server/index.ts]');

  if (!production) {
    app.watch('server/**').completed(proc => proc.start());
  }

  fuse.run();
};

client();
server();
