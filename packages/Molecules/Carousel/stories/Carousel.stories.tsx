import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import Carousel from '../src/Carousel';

export default {
  title: 'Example/Molecules/Carousel',
  component: Carousel,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <Carousel {...args} />
  </NumlProvider>
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
