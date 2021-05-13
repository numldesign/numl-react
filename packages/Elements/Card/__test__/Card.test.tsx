import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from '../index';

/** Card element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card clear> Hello World!</Card>, div);
});

it('Renders without crashing with children and clear attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card clear> Hello World!</Card>, div);
});

it('Renders without crashing with children and special attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card special> Hello World!</Card>, div);
});

it('Renders without crashing with children and toggle attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card toggle> Hello World!</Card>, div);
});
