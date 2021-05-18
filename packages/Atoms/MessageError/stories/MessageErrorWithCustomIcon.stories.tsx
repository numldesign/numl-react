import React from 'react';
import {
  NumlProvider,
  ThemeProvider,
  Icon,
  MessageError,
} from '@numl-react/core';

export default {
  title: 'Example/Atoms/MessageError/CustomIcon',
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
  icon: <Icon name="information-circle-outline" />,
  children: 'This is default message',
};

export const Special = Template.bind({});
Special.args = {
  icon: <Icon name="information-circle-outline" />,
  children: 'This is special',
  theme: 'special',
};

export const Danger = Template.bind({});
Danger.args = {
  icon: <Icon name="information-circle-outline" />,
  children: 'This is danger',
  theme: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  icon: <Icon name="information-circle-outline" />,
  children: 'This is success',
  theme: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  icon: <Icon name="information-circle-outline" />,
  children: 'This is warning',
  theme: 'warning',
};
