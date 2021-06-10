import { Toast } from '@numl-react/core';
import React from 'react';

export default {
  title: 'Numl React/Molecules/Toast',
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
