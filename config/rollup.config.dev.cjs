const { createBaseConfig, basePlugins } = require('../rollup.config.base.cjs');
const packageJson = require('../package.json');

// 开发环境特定的插件
const devPlugins = [
  ...basePlugins,
  // 可以添加开发环境特定的插件
];

// 开发环境配置
const devConfig = [
  // Main bundle
  createBaseConfig('src/index.ts', [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
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
