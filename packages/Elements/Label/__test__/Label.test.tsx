import React from 'react';
import ReactDOM from 'react-dom';
import { Label } from '../index';

/** Label element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Label />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Label> Hello World!</Label>, div);
});
