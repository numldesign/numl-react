import React from 'react';
import ReactDOM from 'react-dom';
import { Code } from '../index';

/** Code element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Code />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Code clear> Hello World!</Code>, div);
});
