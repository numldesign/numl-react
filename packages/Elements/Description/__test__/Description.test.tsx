import React from 'react';
import ReactDOM from 'react-dom';
import { Description } from '../index';

/** Description element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Description />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Description clear> Hello World!</Description>, div);
});
