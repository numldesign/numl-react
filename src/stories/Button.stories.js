import React from 'react';
import Button from '../components/Button';
import Root from '../components/Root';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
  },
};

const Template = ({ label, ...args }) => (
  <Root>
    <Button {...args}>
      {label}
    </Button>
  </Root>
);

export const Special = Template.bind({});
Special.args = {
  special: '',
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
