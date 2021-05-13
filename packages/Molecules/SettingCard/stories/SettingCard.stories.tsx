import React from 'react';
import { NumlProvider, ThemeProvider, SettingCard } from '@numl-react/core';

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
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <SettingCard {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: 'General',
  subtitle: 'View and update your store details.',
  icon: 'settings-outline',
};
