import React from 'react';
import * as El from '@numl-react/elements';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar/Icon',
  component: Avatar,
};

const Template = ({ ...args }) => (
  <>
    <Avatar.Icon size="sm" {...args} />
    <Avatar.Icon size="md" {...args} />
    <Avatar.Icon size="lg" {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = { showIcon: true, username: 'Jhon Doe' };

export const Special = Template.bind({});
Special.args = { theme: 'special', showIcon: true, username: 'Jhon Doe' };

export const Warning = Template.bind({});
Warning.args = { theme: 'warning', showIcon: true, username: 'Jhon Doe' };

export const Success = Template.bind({});
Success.args = { theme: 'success', showIcon: true, username: 'Jhon Doe' };

export const Danger = Template.bind({});
Danger.args = { theme: 'danger', showIcon: true, username: 'Jhon Doe' };
