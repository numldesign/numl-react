import React from 'react';
import ReactDOM from 'react-dom';
import { Check } from '../index';

/** Check element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Check />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Check clear> Hello World!</Check>, div);
});
