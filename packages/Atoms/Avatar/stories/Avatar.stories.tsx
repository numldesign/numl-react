import React from 'react';
import * as El from '@numl-react/elements';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar',
  component: Avatar,
};

const Template = ({ ...args }) => (
  <>
    <Avatar.Icon size="sm" {...args} />
    <Avatar.Icon size="md" {...args} />
    <Avatar.Icon size="lg" {...args} />
  </>
);

export const Basic = Template.bind({});
Basic.args = {};
