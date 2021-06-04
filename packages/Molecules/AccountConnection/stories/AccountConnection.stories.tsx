import React from 'react';
import { El, Link } from '@numl-react/core';
import AccountConnection from '../src/AccountConnection';

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
  parameters: {
    layout: 'none',
  },
};

const Template = ({ onConnectionChange, ...args }) => {
  const [connection, setValue] = React.useState(false);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
    onConnectionChange(connection);
  }, []);

  return (
    <>
      <AccountConnection {...args} connection={connection} toggle={toggle} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  username: 'Example App',
  isConnected: 'false',
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
  isConnected: 'true',
  onConnectionChange: (props) => console.log(props),
  subtitle: 'Account connected',
};
