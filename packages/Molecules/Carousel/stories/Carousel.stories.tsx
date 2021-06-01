import React from 'react';
import * as El from '@numl-react/elements';
import Carousel from '../src/Carousel';

export default {
  title: 'Example/Molecules/Carousel',
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
