import React from 'react';
import AccountConnection from '../components/AccountConnection';
import Root from '../components/Root';
import Link from '../components/Link';

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
  <Root>
    <AccountConnection {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  username: 'Example App',
  onConnectionChange: () => {},
  description: [
    'By clicking Connect, you agree to accept Sample App’s ',
    <Link label="terms and conditions." />,
    ' You’ll pay a commission rate of 15% on sales made through Sample App.',
  ],
};
