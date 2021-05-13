import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from '../index';

/** Footer element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer clear> Hello World!</Footer>, div);
});
