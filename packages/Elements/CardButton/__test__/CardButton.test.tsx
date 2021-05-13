import React from 'react';
import ReactDOM from 'react-dom';
import { CardButton } from '../index';

/** CardButton element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardButton />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardButton clear> Hello World!</CardButton>, div);
});
