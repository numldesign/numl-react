import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../index';

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button clear> Hello World!</Button>, div);
});

it('Renders without crashing with children and clear attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button clear> Hello World!</Button>, div);
});

it('Renders without crashing with children and special attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button special> Hello World!</Button>, div);
});
it('Renders without crashing with children and toggle attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button toggle> Hello World!</Button>, div);
});
