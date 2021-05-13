import React from 'react';
import ReactDOM from 'react-dom';
import { Circle } from '../index';

/** Circle element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Circle />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Circle clear> Hello World!</Circle>, div);
});
