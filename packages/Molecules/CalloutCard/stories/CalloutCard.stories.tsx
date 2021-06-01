import React from 'react';
import { El } from '@numl-react/core';
import CalloutCard from '../src/CalloutCard';
import Button from '../../../Atoms/Button/src/Button';

export default {
  title: 'Example/Molecules/CalloutCard',
  component: CalloutCard,
};

const Template = ({ ...args }) => (
  <>
    <CalloutCard {...args} width="500px" />
  </>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Customize the style of your checkout',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
  actions: [
    <Button.Group>
      <El.Button key="1">Customize Checkout</El.Button>
      <El.Button key="2" color="special" border="0">
        Learn more
      </El.Button>
    </Button.Group>,
  ],
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
};

export const WithoutAction = Template.bind({});
WithoutAction.args = {
  heading: 'Customize the style of your checkout',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
};

const Template2 = ({ ...args }) => (
  <>
    <CalloutCard.Landscape {...args} />
  </>
);

export const Landscape = Template2.bind({});
Landscape.args = {
  heading: 'Customize the style of your checkout',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  actions: [
    <Button.Group>
      <El.Button key="1">Customize Checkout</El.Button>
      <El.Button key="2" color="special" border="0">
        Learn more
      </El.Button>
    </Button.Group>,
  ],
  src: 'https://media.sproutsocial.com/uploads/2017/02/facebook-business-profile.png',
};
