const { createBaseConfig } = require('../rollup.config.base.cjs');

const devConfig = [
  // Main bundle
  createBaseConfig('src/index.ts', [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Utils bundle
  createBaseConfig('src/utils/index.ts', [
    {
      file: 'dist/cjs/utils/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/utils/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Hooks bundle
  createBaseConfig('src/hooks/index.ts', [
    {
      file: 'dist/cjs/hooks/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/hooks/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Store bundle
  createBaseConfig('src/store/index.ts', [
    {
      file: 'dist/cjs/store/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/store/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Constants bundle
  createBaseConfig('src/constants/index.ts', [
    {
      file: 'dist/cjs/constants/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/constants/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
];

module.exports = devConfig;
