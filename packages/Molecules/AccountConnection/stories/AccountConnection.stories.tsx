import React from 'react';
import { Link } from '../../../Atoms/Link';
import Root from '../../../Components/Root';
import { AccountConnection } from '../index';

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
  isConnected: false,
  onConnectionChange: (props) => console.log(props),
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
};
