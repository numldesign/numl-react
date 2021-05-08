import React from 'react';
import ReactDOM from 'react-dom';
import { Flow } from '../index';

/** Flow element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flow />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flow clear> Hello World!</Flow>, div);
});
