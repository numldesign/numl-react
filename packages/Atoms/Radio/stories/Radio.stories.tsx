import React from 'react';
import { NumlProvider, ThemeProvider } from '../../../Core';
import { Radio } from '../index';

export default {
  title: 'Example/Atoms/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },

    label: {
      defaultValue: 'Radio',
      control: {
        type: 'text',
      },
    },
    fill: { control: 'color' },
  },
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    {children ? <Radio.Field children={children} {...args} /> : <Radio {...args} />}
  </NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  children: 'Radio',
};
