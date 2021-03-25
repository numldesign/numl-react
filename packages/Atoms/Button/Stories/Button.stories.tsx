import React from 'react';
import Root from '../../../Components/Root';
import Button from '../src/Button';

export default {
  title: 'Example/Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    special: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ label, special, ...args }) => (
  <Root>
    <Button special={special || undefined} {...args}>
      {label}
    </Button>
  </Root>
);

export const Special = Template.bind({});
Special.args = {
  special: true,
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};