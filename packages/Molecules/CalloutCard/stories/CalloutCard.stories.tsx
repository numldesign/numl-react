import React from 'react';
import { Button } from '../../../Atoms/Button';
import Root from '../../../Components/Root';
import { CalloutCard } from '../index';
import { Icon } from './../../../Atoms/Icon';
import { Link } from './../../../Atoms/Link';
import { Block } from './../../../Components/Block';
import { Image } from './../../../Components/Image';

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
    <CalloutCard {...args} width="500px" />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Customize the style of your checkout',
  description: 'Upload your store’s logo, change colors and fonts, and more.',
  actions: [
    <Button key="1">Customize Checkout</Button>,
    <Button key="2" text="wrap" color="special">
      Learn more about customizing checkout
    </Button>,
  ],
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
  closeAction: (
    <Button
      padding="0"
      border="0"
      width="3"
      onClick={() => {
        console.log('close');
      }}
    >
      <Icon name="close" />
    </Button>
  ),
  extra: (
    <Block>
      <Image src="https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png" />
    </Block>
  ),
};

export const WithoutAction = Template.bind({});
WithoutAction.args = {
  heading: 'Customize the style of your checkout',
  description: 'Upload your store’s logo, change colors and fonts, and more.',
  actions: [
    <Button key="1">Customize Checkout</Button>,
    <Button key="2" text="wrap">
      Learn more about customizing checkout
    </Button>,
  ],
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
  extra: (
    <Block width="10" height="min 20x">
      <Image src="https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png" />
    </Block>
  ),
};

const Template2 = ({ ...args }) => (
  <Root>
    <CalloutCard.Landscape {...args} />
    <CalloutCard.Landscape {...args} />
    <CalloutCard.Landscape {...args} />
  </Root>
);

export const Landscape = Template2.bind({});
Landscape.args = {
  heading: 'Customize the style of your checkout',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
  actions: [
    <Button key="1">Customize Checkout</Button>,
    <Link key="2" text="wrap">
      Learn more about customizing checkout
    </Link>,
  ],
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
  extra: (
    <Block width="10" height="min 20x">
      <Image src="https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png" />
    </Block>
  ),
};
