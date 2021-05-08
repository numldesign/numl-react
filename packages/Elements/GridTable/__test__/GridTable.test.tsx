import React from 'react';
import ReactDOM from 'react-dom';
import { GridTable } from '../index';

/** GridTable element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridTable />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridTable clear> Hello World!</GridTable>, div);
});
