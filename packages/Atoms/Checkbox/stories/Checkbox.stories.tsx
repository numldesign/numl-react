import React from 'react';
import Root from '../../../Components/Root';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Example/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    label: {
      defaultValue: 'Checkbox',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ children, ...args }) => (
  <Root>
    {children ? (
      <Checkbox.Field children={children} {...args} />
    ) : (
      <Checkbox {...args} />
    )}
  </Root>
);

export const Basic: any = Template.bind({});
Basic.args = {
  checked: false,
};

export const WithLabel: any = Template.bind({});
WithLabel.args = {
  checked: false,
  children: 'Checkbox',
};
