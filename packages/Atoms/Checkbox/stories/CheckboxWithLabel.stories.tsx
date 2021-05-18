import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Example/Atoms/Checkbox/With Label',
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
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Checkbox {...args} />
    <Checkbox checked {...args} />
    <Checkbox disabled {...args} />
    <Checkbox checked disabled {...args} />
  </NumlProvider>
);

export const Default: any = Template.bind({});
Default.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'default',
};

export const Special: any = Template.bind({});
Special.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'special',
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'danger',
};

export const Warning: any = Template.bind({});
Warning.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'warning',
};

export const Success: any = Template.bind({});
Success.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'success',
};
