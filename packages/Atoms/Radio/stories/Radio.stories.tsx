import React from 'react';
import Radio from '../src/Radio';

export default {
  title: 'Numl React/Atoms/Radio',
  component: Radio,
};

const Template = ({ children, ...args }) => (
  <>
    <Radio {...args} />
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Welcome to Numl.Design',
};
