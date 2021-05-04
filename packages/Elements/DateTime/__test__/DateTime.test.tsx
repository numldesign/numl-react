import React from 'react';
import ReactDOM from 'react-dom';
import { DateTime } from '../index';

/** DateTime element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateTime />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateTime clear> Hello World!</DateTime>, div);
});
