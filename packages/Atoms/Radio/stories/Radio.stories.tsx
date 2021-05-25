import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import Radio from '../src/Radio';

export default {
  title: 'Example/Atoms/Radio',
  component: Radio,
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Radio {...args} />
  </NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Welcome to Numl.Design',
};
