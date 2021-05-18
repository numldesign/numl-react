import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import Radio from '../src/Radio';

export default {
  title: 'Example/Atoms/Radio/Size',
  component: Radio,
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Radio size="sm" {...args} />
    <Radio size="md" {...args} />
    <Radio size="lg" {...args} />
    <Radio size="xl" {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Welcome to Numl.Design',
};

export const Special = Template.bind({});
Special.args = {
  label: 'Welcome to Numl.Design',
  theme: 'special',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Welcome to Numl.Design',
  theme: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Welcome to Numl.Design',
  theme: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Welcome to Numl.Design',
  theme: 'warning',
};
