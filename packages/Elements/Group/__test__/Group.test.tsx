import React from 'react';
import ReactDOM from 'react-dom';
import { Group } from '../index';

/** Group element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Group />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Group clear> Hello World!</Group>, div);
});
