import React from 'react';
import ReactDOM from 'react-dom';
import { Aside } from '../index';

/** Aside element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Aside />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Aside> Hello World!</Aside>, div);
});
