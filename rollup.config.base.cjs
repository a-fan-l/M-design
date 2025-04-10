const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const svgr = require('@svgr/rollup');
const url = require('@rollup/plugin-url');

const packageJson = require('./package.json');

// 定义共用的别名配置
const path = require('path');
const aliasOptions = {
  '@store': path.resolve(__dirname, 'src/store'),
  '@constants': path.resolve(__dirname, 'src/constants'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@utils': path.resolve(__dirname, 'src/utils'),
  '@hooks': path.resolve(__dirname, 'src/hooks'),
};

// 共用的外部依赖
const external = [
  ...Object.keys(packageJson.peerDependencies || {}),
  ...Object.keys(packageJson.dependencies || {}),
  'react/jsx-runtime',
  'zustand',
  'immer',
  'dayjs',
  'i18next',
  'react-i18next',
  'js-cookie',
  '@reduxjs/toolkit',
  'react-redux',
  'redux-persist',
  'redux-persist-cookie-storage',
  'lucide-react',
];

// 共用的插件配置
const basePlugins = [
  peerDepsExternal(),
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
    alias: aliasOptions,
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  svgr({
    svgo: true,
    typescript: true,
    memo: true,
    ref: false,
    dimensions: false,
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    },
  }),
  url(),
];

// 共用的警告处理
const onwarn = (warning, warn) => {
  if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) {
    return;
  }
  warn(warning);
};

// 创建基础配置的函数
const createBaseConfig = (input, output) => ({
  input,
  output,
  plugins: basePlugins,
  external,
  onwarn,
});

module.exports = {
  createBaseConfig,
  basePlugins,
  external,
  onwarn,
}; 