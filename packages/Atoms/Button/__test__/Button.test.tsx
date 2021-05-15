import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../index';

it('Renders without crashing with children and clear attribute', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button> Hello World!</Button>, div);
});
