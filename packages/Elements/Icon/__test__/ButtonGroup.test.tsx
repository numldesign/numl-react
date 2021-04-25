import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup } from '../index';

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup clear> Hello World!</ButtonGroup>, div);
});

it('Renders without crashing with children and clear attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup clear> Hello World!</ButtonGroup>, div);
});

it('Renders without crashing with children and special attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup special> Hello World!</ButtonGroup>, div);
});
it('Renders without crashing with children and toggle attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup toggle> Hello World!</ButtonGroup>, div);
});
