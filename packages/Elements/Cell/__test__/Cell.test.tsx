import React from 'react';
import ReactDOM from 'react-dom';
import { Cell } from '../index';

/** Cell element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cell />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cell clear> Hello World!</Cell>, div);
});
