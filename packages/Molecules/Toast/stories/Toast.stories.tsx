import React from 'react';
import { NumlProvider, ThemeProvider, Toast } from '../../../Core';

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
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <Toast {...args}></Toast>
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  action: 'assaas',
  text: 'Success',
  helpText: 'Description',
  icon: true,
};
