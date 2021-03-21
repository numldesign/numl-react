import React from 'react';
import Root from './../../Components/Root';
import Badge from './Badge';

export default {
  title: 'Example/Atoms/Badge',
  component: Badge,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    theme: {
      defaultValue: 'special',
      control: {
        type: 'select',
        options: ['special', 'success', 'warning', 'danger'],
      },
    },
    icon: {
      defaultValue: 'alert-circle-outline',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => <Root>{<Badge {...args} />}</Root>;

export const Default = Template.bind({});
Default.args = {
  label: 'Neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Informational',
  name: 'alert-circle-outline',
  icon: `alert-circle-outline`,
};
