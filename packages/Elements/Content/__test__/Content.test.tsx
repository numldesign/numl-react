import React from 'react';
import ReactDOM from 'react-dom';
import { Content } from '../index';

/** Content element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Content />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Content clear> Hello World!</Content>, div);
});
