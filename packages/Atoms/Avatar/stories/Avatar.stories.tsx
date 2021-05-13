import React from 'react';
import { Atoms, El, Avatar } from '@numl-react/core';

export default {
  title: 'Example/Atoms/Avatar',
  component: Atoms.Avatar,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Avatar.Icon {...args} />
  </El.NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {};

const Profile = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Avatar {...args} />
  </El.NumlProvider>
);
export const AvatarProfile = Profile.bind({});
AvatarProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
};
