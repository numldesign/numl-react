import React from 'react';
import { NumlProvider, ThemeProvider, Icon, MessageError } from '../../../Core';

export default {
  title: 'Example/Atoms/MessageError',
  component: MessageError,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <MessageError {...args}>{children}</MessageError>
  </NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  icon: 'information-circle-outline',
  children: 'This is not valid',
  theme: 'danger',
};

const Template2 = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <MessageError {...args}>{children}</MessageError>
  </NumlProvider>
);

export const WithIcon = Template2.bind({});
WithIcon.args = {
  icon: <Icon name="information-circle-outline"></Icon>,
  children: 'This is not valid',
  theme: 'danger',
};
