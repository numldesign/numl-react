import React from 'react';
import ReactDOM from 'react-dom';
import { Flex } from '../index';

/** Flex element test */

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flex />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flex clear> Hello World!</Flex>, div);
});
