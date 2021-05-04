import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from '../index';

/** Base element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Base />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Base> Hello World!</Base>, div);
});
