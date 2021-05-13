import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../index';

/** Form element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form clear> Hello World!</Form>, div);
});
