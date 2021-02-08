import React from 'react';
import Switchtoggle from '../components/Switchtoggle';
import SwitchtoggleField from '../components/SwitchtoggleField'
import Root from '../components/Root';

export default {
  title: 'Example/Switchtoggle',
  component: Switchtoggle,
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
    {label ? <SwitchtoggleField
      label={label}
      {...args}
    /> : <Switchtoggle
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
