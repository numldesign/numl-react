import React from 'react';
import * as El from '@numl-react/elements';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar/Profile',
  component: Avatar,
};

const Profile = ({ ...args }) => (
  <>
    <Avatar {...args} />
  </>
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
