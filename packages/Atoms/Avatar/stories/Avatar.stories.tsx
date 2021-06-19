import * as El from '@numl-react/elements';
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
    <El.Grid
      xs="auto"
      sm="auto auto"
      md="auto auto auto"
      lg="auto auto auto auto"
      xl="auto auto auto auto auto"
      gap
    >
      <El.BaseElement>hello</El.BaseElement>
      <El.BaseElement>hello</El.BaseElement>
      <El.BaseElement>hello</El.BaseElement>
      <El.BaseElement>hello</El.BaseElement>
      <El.BaseElement>hello</El.BaseElement>
    </El.Grid>
  </React.Fragment>
);

export const Basic = Template.bind({});
Basic.args = {};
