import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '../index';

/** Grid element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Grid />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Grid clear> Hello World!</Grid>, div);
});
