import React from 'react';
import ReactDOM from 'react-dom';
import { InlineCode } from '../index';

/** InlineCode element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<InlineCode />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<InlineCode clear> Hello World!</InlineCode>, div);
});
