import React from 'react';
import * as El from '@numl-react/elements';
import ProductCard from '../src/ProductCard';

export default {
  title: 'Example/Organisms/ProductCard',
  component: ProductCard,
};

const Template = ({ ...args }) => (
  <>
    <ProductCard {...args} />
  </>
);

export const Default: any = Template.bind({});
Default.args = {
  name: 'New Product and the market',
  detail: 'Product Details',
  currency: '$',
  price: '70,000',
  image:
    'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  rating: {
    tag: 'Neutral',
    count: '15',
    avgRating: '3',
  },
};

const Template2 = ({ ...args }) => (
  <>
    <ProductCard.Landscape {...args} />
  </>
);

export const ProductCardPotrait: any = Template2.bind({});
ProductCardPotrait.args = {
  name: 'New Product and the market',
  detail: 'Product Details',
  currency: '$',
  price: '70,000',
  image:
    'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  rating: {
    tag: 'Neutral',
    count: '15',
    avgRating: '3',
  },
};
