import React from 'react';
import ReactDOM from 'react-dom';
import { Field } from '../index';

/** Field element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Field />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Field clear> Hello World!</Field>, div);
});
