import React from 'react';
import { NumlProvider, ThemeProvider, Tooltip, El } from '../../../entry';

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
  <NumlProvider padding="6x 2x">
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <El.Button>
      Hover me
      <Tooltip {...args} />
    </El.Button>
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  padding: '1x',
  size: 'md',
  place: 'outside-right',
  description: 'This order has shipping labels.',
};
