import React from 'react';
import { Badge, El, Thumbnail } from '@numl-react/core';
import OptionList from '../src/OptionList';
import { Button } from '@numl-react/elements';

export default {
  title: 'Example/Molecules/OptionList',
  component: OptionList,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <OptionList {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  gap: '2x',
  items: [
    {
      heading: 'Product List 1',
    },
    {
      hasCheckbox: true,
      children: 'Nike Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: 'Adidas Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: (
        <El.Block>
          <El.Heading level="6">Custom Product</El.Heading>
          <El.Block size="sm">Shoes</El.Block>
          <El.Block size="sm">Sneakers</El.Block>
        </El.Block>
      ),
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
  ],
};

export const Double = Template.bind({});
Double.args = {
  width: '20',
  items: [
    {
      heading: 'Product List 1',
    },
    {
      hasCheckbox: true,
      children: 'Nike Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: 'Adidas Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: (
        <El.Block>
          <El.Heading level="6">Custom Product</El.Heading>
          <El.Block size="sm">Shoes</El.Block>
          <El.Block size="sm">Sneakers</El.Block>
        </El.Block>
      ),
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      heading: 'Product List 2',
    },
    {
      hasCheckbox: true,
      children: 'Nike Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: 'Adidas Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: (
        <El.Block>
          <El.Heading level="6">Custom Product</El.Heading>
          <El.Block size="sm">Shoes</El.Block>
          <El.Block size="sm">Sneakers</El.Block>
        </El.Block>
      ),
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
  ],
};
