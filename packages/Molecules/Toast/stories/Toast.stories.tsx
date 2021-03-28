import React from 'react';
import Root from '../../../Components/Root';
import { Toast } from '../index';

export default {
  title: 'Example/Molecules/Toast',
  component: Toast,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['default', 'success', 'danger', 'warning'],
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <Toast {...args}></Toast>
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  action: 'assaas',
  text: 'Success',
  helpText: 'Description',
  icon: true,
};
