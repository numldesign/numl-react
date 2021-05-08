import React from 'react';
import ReactDOM from 'react-dom';
import { EmailInput } from '../index';

/** EmailInput element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailInput />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailInput clear> Hello World!</EmailInput>, div);
});
