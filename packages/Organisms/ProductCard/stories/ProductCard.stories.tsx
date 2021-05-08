import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import ProductCard from '../src/ProductCard';

export default {
  title: 'Example/Organisms/ProductCard',
  component: ProductCard,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>

    <ProductCard {...args}></ProductCard>
  </NumlProvider>
);

export const Default: any = Template.bind({});
Default.args = {
  name: 'New Product and the market',
  detail: 'Product Details',
  currency: '$',
  price: '70,000',
  image:
    'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  color: ['#333', 'special', 'light', 'text', 'purple'],
  rating: {
    tag: 'Neutral',
    count: '15',
    avgRating: '3',
  },
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
};

const Template2 = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>

    <ProductCard.Landscape {...args}></ProductCard.Landscape>
  </NumlProvider>
);

export const ProductCardPotrait: any = Template2.bind({});
ProductCardPotrait.args = {
  name: 'New Product and the market',
  detail: 'Product Details',
  currency: '$',
  price: '70,000',
  image:
    'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  color: ['#333', 'special', 'light', 'text', 'purple'],
  rating: {
    tag: 'Neutral',
    count: '15',
    avgRating: '3',
  },
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
};
