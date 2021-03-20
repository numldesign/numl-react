import React from 'react';
import Button from '../../Atoms/Button/Button';
import Root from '../../Components/Root';
import CalloutCard from './CalloutCard';

export default {
  title: 'Example/Molecules/CalloutCard',
  component: CalloutCard,
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <CalloutCard {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Customize the style of your checkout',
  description: 'Upload your store’s logo, change colors and fonts, and more.',
  actions: [
    <Button key="1">Customize Checkout</Button>,
    <Button key="2" clear text="wrap">
      Learn more about customizing checkout
    </Button>,
  ],
  closeAction: (
    <Button
      padding="0"
      border="0"
      width="3"
      onClick={() => {
        console.log('close');
      }}
    >
      <nu-icon name="close" />
    </Button>
  ),
  extra: (
    <nu-block width="10" height="min 20x">
      <nu-img src="https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png" />
    </nu-block>
  ),
};
