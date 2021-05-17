import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import Checkbox from '../src/Checkbox';

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
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Checkbox {...args} />
    <Checkbox checked {...args} />
    <Checkbox disabled {...args} />
    <Checkbox checked disabled {...args} />
  </NumlProvider>
);

export const Basic: any = Template.bind({});
Basic.args = {
  label: 'Hello World!',
};

export const WithLabel: any = Template.bind({});
WithLabel.args = {
  label: 'Hello World!',
};

export const WithLabelElement: any = Template.bind({});
WithLabelElement.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
};
