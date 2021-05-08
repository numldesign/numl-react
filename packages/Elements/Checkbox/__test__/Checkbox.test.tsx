import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '../index';

/** Checkbox element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox clear> Hello World!</Checkbox>, div);
});
