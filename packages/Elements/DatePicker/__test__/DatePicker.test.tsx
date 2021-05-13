import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '../index';

/** DatePicker element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<DatePicker />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<DatePicker clear> Hello World!</DatePicker>, div);
});
