import React from 'react';
import Tag from '../src/Tag';

export default {
  title: 'Numl React/Atoms/Tag',
  component: Tag,
};

const Template = ({ ...args }) => (
  <>
    <Tag {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  deletable: true,
  label: 'Informational',
};
