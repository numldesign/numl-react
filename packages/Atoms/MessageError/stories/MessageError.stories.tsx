import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import MessageError from '../src/MessageError';

export default {
  title: 'Example/Atoms/MessageError/Basic',
  component: MessageError,
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <MessageError {...args}>{children}</MessageError>
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is not valid',
};

export const Special = Template.bind({});
Special.args = {
  children: 'This is not valid',
  theme: 'special',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'This is not valid',
  theme: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  children: 'This is not valid',
  theme: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'This is not valid',
  theme: 'warning',
};
