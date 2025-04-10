const { terser } = require('rollup-plugin-terser');
const { createBaseConfig, basePlugins } = require('../rollup.config.base.cjs');

const prodPlugins = [...basePlugins, terser()];

const createProdConfig = (input, output) => ({
  ...createBaseConfig(input, output),
  plugins: prodPlugins,
});

const prodConfig = [
  // Main bundle
  createProdConfig('src/index.ts', [
    {
      file: 'dist/cjs/index.min.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/index.min.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Utils bundle
  createProdConfig('src/utils/index.ts', [
    {
      file: 'dist/cjs/utils/index.min.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/utils/index.min.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Hooks bundle
  createProdConfig('src/hooks/index.ts', [
    {
      file: 'dist/cjs/hooks/index.min.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/hooks/index.min.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Store bundle
  createProdConfig('src/store/index.ts', [
    {
      file: 'dist/cjs/store/index.min.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/store/index.min.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Constants bundle
  createProdConfig('src/constants/index.ts', [
    {
      file: 'dist/cjs/constants/index.min.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/constants/index.min.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
];

module.exports = prodConfig;
