import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../index';

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Icon />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Icon name="person" />, div);
});
