import React from 'react';
import ReactDOM from 'react-dom';
import { DateInput } from '../index';

/** DateInput element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateInput />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateInput clear> Hello World!</DateInput>, div);
});
