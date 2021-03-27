import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import { terser } from 'rollup-plugin-terser';

const babelConfig = {
  babelHelpers: 'bundled',
  presets: ['@babel/preset-react'],
};

const external = ['jsx-native-events', 'react', 'react-dom', 'prop-types', 'numl-react'];

const plugins = [
  terser(),
  resolve({
    mainFields: ['module', 'main', 'jsnext:main'],
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  }),
  commonjs(),
  url(),
  babel(babelConfig),
];

export default [
  {
    input: 'packages/core.js',
    external,
    output: [
      {
        name: 'Numl React Components',
        dir: './dist/',
        format: 'es',
      },
    ],
    plugins,
  },
];
