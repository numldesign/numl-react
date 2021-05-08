import React from 'react';
import { NumlProvider, ThemeProvider, AccountConnection, Link } from '@numl-react/core';

export default {
  title: 'Example/Molecules/AccountConnection',
  component: AccountConnection,
  argTypes: {
    username: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <AccountConnection {...args}></AccountConnection>
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  username: 'Example App',
  isConnected: false,
  onConnectionChange: (props) => console.log(props),
  subtitle: 'Account connected',
  children: [
    'By clicking Connect, you agree to accept Sample App’s ',
    <Link key="1" label="terms and conditions." />,
    ' You’ll pay a commission rate of 15% on sales made through Sample App.',
  ],
};

export const WithoutChildren = Template.bind({});
WithoutChildren.args = {
  username: 'Example App',
  isConnected: true,
  onConnectionChange: (props) => console.log(props),
  subtitle: 'Account connected',
};
