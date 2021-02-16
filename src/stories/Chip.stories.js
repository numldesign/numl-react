import React from 'react';
import Chip from '../components/Chip';
import Root from '../components/Root';
import Icon from '../components/Icon';

export default {
  title: 'Example/Chip',
  component: Chip,
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

const Template = ({ ...args }) => <Root>{<Chip {...args} />}</Root>;

export const Default = Template.bind({});
Default.args = {
  label: 'Neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Informational',
  name: 'information-circle-outline',
  icon: <Icon name="information-circle-outline"></Icon>,
};
