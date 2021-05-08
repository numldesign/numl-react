import React from 'react';
import ReactDOM from 'react-dom';
import { Badge } from '../index';

/** Badge element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Badge />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Badge> Hello World!</Badge>, div);
});
