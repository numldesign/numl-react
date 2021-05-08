import React from 'react';
import ReactDOM from 'react-dom';
import { ColumnHeader } from '../index';

/** ColumnHeader element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ColumnHeader />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<ColumnHeader clear> Hello World!</ColumnHeader>, div);
});
