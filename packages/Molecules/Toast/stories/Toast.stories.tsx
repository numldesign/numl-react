import React from 'react';
import { El, Toast } from '@numl-react/core';

export default {
  title: 'Example/Molecules/Toast',
  component: Toast,
};

const Template = ({ ...args }) => (
  <>
    <Toast {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  action: 'assaas',
  text: 'Success',
  helpText: 'Description',
  icon: true,
};
