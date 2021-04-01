import React from 'react';
import Root from '../../../Components/Root';
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
    <Root>
      <Avatar {...args}></Avatar>
    </Root>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

const Profile = ({ ...args }) => {
  return (
    <Root>
      <Avatar.Profile {...args}>
        <Avatar {...args}></Avatar>
      </Avatar.Profile>
    </Root>
  );
};
export const AvatarProfile = Profile.bind({});
AvatarProfile.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
  showArrow: true,
  showIcon: false,
};
