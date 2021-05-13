import React from 'react';
import ReactDOM from 'react-dom';
import { FileInput } from '../index';

/** FileInput element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FileInput />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FileInput clear> Hello World!</FileInput>, div);
});
