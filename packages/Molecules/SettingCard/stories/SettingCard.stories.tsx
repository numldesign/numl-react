import React from 'react';
import { El, SettingCard } from '@numl-react/core';

export default {
  title: 'Example/Molecules/SettingCard',
  component: SettingCard,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <>
    <SettingCard {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'General',
  subtitle: 'View and update your store details.',
  icon: 'settings-outline',
};
