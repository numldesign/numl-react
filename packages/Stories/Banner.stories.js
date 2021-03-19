import React from 'react';

import Banner from '../Molecules/Banner';
import Button from '../Atoms/Button/Button';
import Icon from '../Atoms/Icon/Icon';
import Root from './../Components/Root';

export default {
  title: 'Example/Molecules/Banner',
  component: Banner,
  argTypes: {
    prefix: {
      control: {
        type: 'text',
      },
    },
    heading: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <Banner {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Default Banner',
  footerActions: [
    <Button key="1">Button</Button>,
    <Button key="2" clear>
      Button
    </Button>,
  ],
  closeAction: (
    <Button
      padding="0"
      border="0"
      onClick={() => {
        console.log('close');
      }}
    >
      <nu-icon name="close" />
    </Button>
  ),
  prefix: <Icon name="information-circle-outline" />,
  children: 'Body Text. Link',
};
