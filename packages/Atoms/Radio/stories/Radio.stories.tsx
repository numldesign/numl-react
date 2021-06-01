import React from 'react';
import * as El from '@numl-react/elements';
import Radio from '../src/Radio';

export default {
  title: 'Example/Atoms/Radio',
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
