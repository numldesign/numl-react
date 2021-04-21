import React from 'react';
import { NumlProvider, ThemeProvider, Checkbox } from '../../../entry';

export default {
  title: 'Example/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'text',
      },
    },
    checked: {
      defaultValue: 'Checkbox',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <Checkbox.Field {...args}></Checkbox.Field>
  </NumlProvider>
);

export const Basic: any = Template.bind({});
Basic.args = {
  checked: true,
  label: 'Label Name',
};

const Template2 = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <Checkbox.Field {...args}>
      <Checkbox.Label>{children}</Checkbox.Label>
    </Checkbox.Field>
  </NumlProvider>
);
export const WithLabel: any = Template2.bind({});
WithLabel.args = {
  checked: true,
  children: 'Label Name',
};
