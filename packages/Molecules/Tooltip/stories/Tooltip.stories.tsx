import React from 'react';
import { El, Tooltip } from '@numl-react/core';

export default {
  title: 'Example/Molecules/Tooltip',
  component: Tooltip,
  argTypes: {
    username: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <El.NumlProvider padding="6x 2x">
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <El.Button>
      Hover me
      <Tooltip {...args} />
    </El.Button>
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  padding: '1x',
  size: 'md',
  place: 'outside-right',
  description: 'This order has shipping labels.',
};
