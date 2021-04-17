import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      defaultValue: 1.75,
      control: {
        type: 'text',
      },
    },
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
    <NumlProvider fill={'black'}>
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      <Avatar.Icon {...args}></Avatar.Icon>
    </NumlProvider>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

const Profile = ({ ...args }) => {
  return (
    <NumlProvider fill={'black'}>
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
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
