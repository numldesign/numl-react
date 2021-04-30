import React from 'react';
import { Atoms, El } from '../../../entry';

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
      <Atoms.Avatar.Icon {...args}></Atoms.Avatar.Icon>
    </El.NumlProvider>
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
