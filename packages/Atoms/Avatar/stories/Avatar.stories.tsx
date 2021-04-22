import React from 'react';
import { NumlProvider, ThemeProvider, Avatar } from '../../../entry';

export default {
  title: 'Example/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    fill: {
      defaultValue: '#special-bg',
      control: {
        type: 'inline-radio',
        options: ['#bg', '#special-bg', '#danger', '#success', '#warning'],
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
      <Avatar.Icon {...args}></Avatar.Icon>
    </NumlProvider>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

const Profile = ({ ...args }) => {
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
      <Avatar {...args}></Avatar>
    </NumlProvider>
  );
};
export const AvatarProfile = Profile.bind({});
AvatarProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
};
