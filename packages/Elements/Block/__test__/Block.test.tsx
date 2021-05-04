import React from 'react';
import ReactDOM from 'react-dom';
import { Block } from '../index';

/** Block element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Block />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Block> Hello World!</Block>, div);
});
