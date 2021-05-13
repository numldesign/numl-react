import React from 'react';
import ReactDOM from 'react-dom';
import { Emphasis } from '../index';

/** Emphasis element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Emphasis />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Emphasis clear> Hello World!</Emphasis>, div);
});
