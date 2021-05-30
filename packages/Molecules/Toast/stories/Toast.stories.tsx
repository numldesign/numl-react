import React from 'react';
import { El, Toast } from '@numl-react/core';

export default {
  title: 'Example/Molecules/Toast',
  component: Toast,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Toast {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  action: 'assaas',
  text: 'Success',
  helpText: 'Description',
  icon: true,
};
