import React from 'react';
import Root from '../components/Root';
import Switch from '../components/Switch';

export default {
  title: 'Example/Switch',
  component: Switch,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
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
    }
  },
};

const Template = ({ children, ...args }) => (
  <Root>
    {children ? <Switch.Field children={children} {...args} /> : <Switch {...args} />}
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
