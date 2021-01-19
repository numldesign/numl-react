import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const babelConfig = {
  babelHelpers: 'bundled',
  'presets': [
    '@babel/preset-react'
  ],
};

const external = [
  'jsx-native-events',
  'react',
  'react-dom',
  'prop-types',
  'numl-react',
];

const plugins = [
  terser(),
  resolve({
    mainFields: ['module', 'main', 'jsnext:main'],
    extensions: ['.jsx', '.js'],
  }),
  commonjs(),
  url(),
  babel(babelConfig),
];

export default [
  {
    input: 'src/core.js',
    external,
    output: [{
      name: 'Numl React Components',
      dir: './dist/',
      format: 'es',
    }],
    plugins,
  },
];
