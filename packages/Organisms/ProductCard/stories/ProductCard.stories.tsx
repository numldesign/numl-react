import React from 'react';
import Root from '../../../Components/Root';
import ProductCard from '../src/ProductCard';

export default {
  title: 'Example/Organisms/ProductCard',
  component: ProductCard,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <Root>
    <ProductCard></ProductCard>
  </Root>
);

export const Default = Template.bind({});
Default.args = {};
