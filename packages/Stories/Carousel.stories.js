import React from 'react';

import Root from './../Components/Root';
import Carousel from '../Molecules/Carousel';

export default {
  title: 'Example/Molecules/Carousel',
  component: Carousel,
};

const Template = ({ ...args }) => (
  <Root>
    <Carousel {...args} />
  </Root>
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
