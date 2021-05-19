import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Example/Atoms/Checkbox/Themes',
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
  label: 'Hello World!',
  theme: 'default',
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Hello World!',
  theme: 'danger',
};

export const Warning: any = Template.bind({});
Warning.args = {
  label: 'Hello World!',
  theme: 'warning',
};

export const Success: any = Template.bind({});
Success.args = {
  label: 'Hello World!',
  theme: 'success',
};
