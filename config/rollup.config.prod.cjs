const { createBaseConfig, basePlugins } = require('../rollup.config.base.cjs');
const { terser } = require('rollup-plugin-terser');
const dts = require('rollup-plugin-dts');
const packageJson = require('../package.json');

// 生产环境特定的插件
const prodPlugins = [
  ...basePlugins,
  terser(), // 代码压缩
];

// 生产环境配置
const prodConfig = [
  // Main bundle
  {
    ...createBaseConfig('src/index.ts', [
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
    plugins: prodPlugins,
  },
  // Utils bundle
  {
    ...createBaseConfig('src/utils/index.ts', [
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
    plugins: prodPlugins,
  },
  // Hooks bundle
  {
    ...createBaseConfig('src/hooks/index.ts', [
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
    plugins: prodPlugins,
  },
  // Store bundle
  {
    ...createBaseConfig('src/store/index.ts', [
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
    plugins: prodPlugins,
  },
  // Constants bundle
  {
    ...createBaseConfig('src/constants/index.ts', [
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
    plugins: prodPlugins,
  },
  // Type definitions
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/types',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [dts()],
    external: [
      /\.css$/,
      'react',
      'react-dom',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
      /^@components\//,
      /^@utils\//,
      /^@hooks\//,
      /^@store\//,
    ],
  },
];

module.exports = prodConfig;
