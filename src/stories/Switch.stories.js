import React from 'react';
import Root from '../components/Root';
import Switch from '../components/Switch';
import SwitchField from '../components/SwitchField'

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
    fill:{
      control: {
        type: 'color',
      },
    }
  },
};

const TemplateSwitchtoggle = ({ label, ...args }) => (
  <Root>
    {label ? <SwitchField
      label={label}
      {...args}
    /> : <Switch
        {...args}
      />}
  </Root>
);

export const Basic = TemplateSwitchtoggle.bind({});
Basic.args = {
  checked: false,
  label: '',
};

export const WithLabel = TemplateSwitchtoggle.bind({});
WithLabel.args = {
  checked: false,
  label: 'Switchtoggle',
};
