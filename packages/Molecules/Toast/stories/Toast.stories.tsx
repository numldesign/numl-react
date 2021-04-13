import React from 'react';
import Root from '../../../Elements/Root';
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
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

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
