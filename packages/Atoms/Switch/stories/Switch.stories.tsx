import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
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
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    {children ? <Switch.Field children={children} {...args} /> : <Switch {...args} />}
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
