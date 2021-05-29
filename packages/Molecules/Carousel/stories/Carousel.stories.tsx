import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import Carousel from '../src/Carousel';

export default {
  title: 'Example/Molecules/Carousel',
  component: Carousel,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
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
