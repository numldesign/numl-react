import React from 'react';
import Carousel from '../src/Carousel';

export default {
  title: 'Numl React/Molecules/Carousel',
  component: Carousel,
};

const Template = ({ ...args }) => (
  <>
    <Carousel {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    'https://source.unsplash.com/user/erondu/1000x700',
    'https://source.unsplash.com/user/erondu/1000x700',
    'https://source.unsplash.com/user/erondu/1000x700',
    'https://source.unsplash.com/user/erondu/1000x700',
  ],
};
