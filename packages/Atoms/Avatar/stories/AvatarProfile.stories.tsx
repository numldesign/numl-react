import React from 'react';
import { El } from '@numl-react/core';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar/Profile',
  component: Avatar,
};

const Profile = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Avatar {...args} />
  </El.NumlProvider>
);
export const AvatarDefaultProfile = Profile.bind({});
AvatarDefaultProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
  children: 'Hello this is my custom popup message',
};

export const AvatarSpecialProfile = Profile.bind({});
AvatarSpecialProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
  children: 'Hello this is my custom popup message',
  theme: 'special',
};

export const AvatarSuccessProfile = Profile.bind({});
AvatarSuccessProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
  children: 'Hello this is my custom popup message',
  theme: 'success',
};

export const AvatarDangerProfile = Profile.bind({});
AvatarDangerProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
  children: 'Hello this is my custom popup message',
  theme: 'danger',
};

export const AvatarWarningProfile = Profile.bind({});
AvatarWarningProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
  children: 'Hello this is my custom popup message',
  theme: 'warning',
};
