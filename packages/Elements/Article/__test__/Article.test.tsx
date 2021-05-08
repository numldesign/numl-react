import React from 'react';
import ReactDOM from 'react-dom';
import { Article } from '../index';

/** Article element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article clear> Hello World!</Article>, div);
});

it('Renders without crashing with children and clear attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article clear> Hello World!</Article>, div);
});

it('Renders without crashing with children and special attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article special> Hello World!</Article>, div);
});

it('Renders without crashing with children and toggle attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article toggle> Hello World!</Article>, div);
});
