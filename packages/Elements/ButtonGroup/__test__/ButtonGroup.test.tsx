import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup } from '../index';

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup clear> Hello World!</ButtonGroup>, div);
});
