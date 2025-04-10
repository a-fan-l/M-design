import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import progressPlugin from './scripts/rollup-progress.js';
import svgr from '@svgr/rollup';

const packageJson = require('./src/package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
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
    ],
    plugins: [
      progressPlugin(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      svgr(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: Object.keys(packageJson.peerDependencies || {}).concat(
      Object.keys(packageJson.dependencies || {})
    ),
  },
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
      /\.svg$/,
      'react',
      'react-dom',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
      'i18next',
      'react-i18next',
      /^@components\//,
      /^@utils\//,
      /^@hooks\//,
      /^@store\//,
      /^@constants\//,
    ],
  },
];
