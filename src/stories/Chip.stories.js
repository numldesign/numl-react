import React from 'react';

import Root from '../components/Root';
import Chip from '../Atoms/Chip';
import Icon from '../Atoms/Icon';

export default {
  title: 'Example/Atoms/Chip',
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
