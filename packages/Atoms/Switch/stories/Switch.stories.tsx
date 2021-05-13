import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import { Switch } from '../index';

export default {
  title: 'Example/Atoms/Switch',
  component: Switch,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    label: {
      defaultValue: 'Switchtoggle',
      control: {
        type: 'text',
      },
    },
    fill: {
      control: {
        type: 'color',
      },
    },
  },
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />

    {children ? (
      <Switch.Field {...args}>{children}</Switch.Field>
    ) : (
      <Switch {...args} />
    )}
  </NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  children: 'Switch',
};
