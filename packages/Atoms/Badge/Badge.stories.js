import React from 'react';

import Root from './../../Components/Root';
import Icon from '../Icon/Icon';
import Badge from './Badge';

export default {
  title: 'Example/Atoms/Badge',
  component: Badge,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg', undefined],
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
  name: 'ellipse-outline',
  icon: <Icon name="ellipse-outline"></Icon>,
};
