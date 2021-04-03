import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

//👇 Imports a specific story for the test
import { Default } from '../stories/Button.stories';

it('renders the button in the default state', () => {
  render(<Default label="Button" />); // {...Defaults.args}
  expect(screen.getByRole('button')).toHaveTextContent('Button');
});
