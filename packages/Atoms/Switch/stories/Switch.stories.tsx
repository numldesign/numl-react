import React from 'react';
import Root from '../../../Components/Root';
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
  <Root>
    {children ? (
      <Switch.Field children={children} {...args} />
    ) : (
      <Switch {...args} />
    )}
  </Root>
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
