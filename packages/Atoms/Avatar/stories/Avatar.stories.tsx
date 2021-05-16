import React from 'react';
import { El } from '@numl-react/core';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar',
  component: Avatar,
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
