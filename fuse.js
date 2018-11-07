const {
  FuseBox,
  EnvPlugin,
  QuantumPlugin,
  WebIndexPlugin,
  CopyPlugin,
} = require('fuse-box');

const production = process.env.NODE_ENV === 'dev' ? false : true;

const getConfig = (target, type) => {
  return {
    homeDir: 'src/',
    cache: !production,
    target,
    output: `build/$name.js`,
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
    alias: {},
  };
};

const getClientConfig = () => {
  return Object.assign({}, getConfig('browser@es6', 'app'), {
    hash: production,
    sourceMaps: !production,
  });
};

const getWebIndexPlugin = name => {
  return WebIndexPlugin({
    template: `src/resources/page/${name}.html`,
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

const config = getClientConfig();

config.plugins.push(getWebIndexPlugin('index'));
config.plugins.push(getCopyPlugin());

const fuse = FuseBox.init(config);
const app = fuse.bundle('app').instructions('> ./index.tsx');

if (!production) {
  fuse.dev({ port: 8080 });

  app.hmr().watch('*/**');
}

fuse.run();
