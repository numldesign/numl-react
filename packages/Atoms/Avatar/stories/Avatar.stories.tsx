import React from 'react';
import { Atoms, El, Avatar } from '../../../entry';

export default {
  title: 'Example/Atoms/Avatar',
  component: Atoms.Avatar,
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
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
      <Avatar.Icon {...args}></Avatar.Icon>
    </El.NumlProvider>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

const Profile = ({ ...args }) => {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
      <Avatar {...args}></Avatar>
    </El.NumlProvider>
  );
};
export const AvatarProfile = Profile.bind({});
AvatarProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
};
