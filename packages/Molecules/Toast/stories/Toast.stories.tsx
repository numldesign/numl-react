import React from 'react';
import { NumlProvider, ThemeProvider, Toast } from '@numl-react/core';

export default {
  title: 'Example/Molecules/Toast',
  component: Toast,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Toast {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  action: 'assaas',
  text: 'Success',
  helpText: 'Description',
  icon: true,
};
