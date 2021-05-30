import React from 'react';
import * as El from '@numl-react/elements';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar',
  component: Avatar,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Avatar.Icon size="sm" {...args} />
    <Avatar.Icon size="md" {...args} />
    <Avatar.Icon size="lg" {...args} />
  </El.NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {};
