import React from 'react';
import { NumlProvider, Icon, ThemeProvider, CalloutCard, Link, Block, Image, Button } from '../../../entry';
import { El } from './../../../entry';
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
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
    <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>

    <CalloutCard {...args} width="500px" />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Customize the style of your checkout',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
  actions: [
    <El.Button key="1" size="xs">
      Customize Checkout
    </El.Button>,
    <El.Button key="2" size="xs" color="special" border="0">
      Learn more about customizing checkout
    </El.Button>,
  ],
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
};

export const WithoutAction = Template.bind({});
WithoutAction.args = {
  heading: 'Customize the style of your checkout',
  description: 'Upload your store’s logo, change colors and fonts, and more.',
  actions: [
    <El.Button key="1">Customize Checkout</El.Button>,
    <El.Button key="2" size="xs" color="special" border="0">
      Learn more about customizing checkout
    </El.Button>,
  ],
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
};

const Template2 = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
    <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
    <CalloutCard.Landscape {...args} />
    <CalloutCard.Landscape {...args} />
    <CalloutCard.Landscape {...args} />
  </El.NumlProvider>
);

export const Landscape = Template2.bind({});
Landscape.args = {
  heading: 'Customize the style of your checkout',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
  actions: [
    <El.Button key="1" size="xs">
      Customize Checkout
    </El.Button>,
    <El.Button key="2" size="xs" color="special" border="0">
      Learn more about customizing checkout
    </El.Button>,
  ],
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
  extra: (
    <El.Block width="10" height="min 20x">
      <El.Image src="https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png" />
    </El.Block>
  ),
};
