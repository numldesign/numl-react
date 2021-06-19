import React from 'react';
import Avatar from '../src/Avatar';

export default {
  title: 'Numl React/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'none',
  },
};

const Template = ({ ...args }) => (
  <React.Fragment>
    <Avatar.Icon size="sm" {...args} />
    <Avatar.Icon size="md" {...args} />
    <Avatar.Icon size="lg" {...args} />
  </React.Fragment>
);

export const Basic = Template.bind({});
Basic.args = {};
