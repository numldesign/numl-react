import React from 'react';
import { El } from '@numl-react/core';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar/Icon',
  component: Avatar,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Avatar.Icon {...args} />
  </El.NumlProvider>
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
