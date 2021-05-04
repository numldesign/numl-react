import React from 'react';
import ReactDOM from 'react-dom';
import { Action } from '../index';

/** Action element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Action />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Action clear> Hello World!</Action>, div);
});

it('Renders without crashing with children and clear attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Action clear> Hello World!</Action>, div);
});

it('Renders without crashing with children and special attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Action special> Hello World!</Action>, div);
});

it('Renders without crashing with children and toggle attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Action toggle> Hello World!</Action>, div);
});
