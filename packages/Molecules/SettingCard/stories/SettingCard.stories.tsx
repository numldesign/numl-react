import React from 'react';
import Root from '../../../Elements/Root';
import { SettingCard } from '../index';

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
  <Root>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <SettingCard {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  title: 'General',
  subtitle: 'View and update your store details.',
  icon: 'settings-outline',
};
