import React from 'react';
import * as El from '@numl-react/elements';
import Tag from '../src/Tag';

export default {
  title: 'Example/Atoms/Tag',
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
