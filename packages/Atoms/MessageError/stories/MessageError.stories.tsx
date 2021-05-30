import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/elements';
import MessageError from '../src/MessageError';

export default {
  title: 'Example/Atoms/MessageError',
  component: MessageError,
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <MessageError {...args}>{children}</MessageError>
  </NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'This is not valid',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'information-circle-outline',
  children: 'This is okay',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: <Icon name="information-circle-outline" />,
  children: 'This is default message',
};
