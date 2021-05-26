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
  items: [
    {
      heading: 'Heading s',
    },
    {
      hasCheckbox: true,
      children: 'Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: 'Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: (
        <El.Block flex gap="0.1" size="sm" flow="columns wrap">
          <El.Heading level="6">Product</El.Heading>
          <El.Block size="sm">dasdsd</El.Block>
          <El.Block size="sm">dasdsd</El.Block>
        </El.Block>
      ),
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
  ],
};

export const Double = Template.bind({});
Double.args = {
  items: [
    {
      heading: 'Heading s',
    },
    {
      hasCheckbox: true,
      children: 'Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: 'Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: (
        <El.Block flex gap="0.1" size="sm" flow="columns wrap">
          <El.Heading level="6">Product</El.Heading>
          <El.Block size="sm">dasdsd</El.Block>
          <El.Block size="sm">dasdsd</El.Block>
        </El.Block>
      ),
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      heading: 'Heading s',
    },
    {
      hasCheckbox: true,
      children: 'Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: 'Shoe',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      hasCheckbox: 'true',
      children: (
        <El.Block flex gap="0.1" size="sm" flow="columns wrap">
          <El.Heading level="6">Product</El.Heading>
          <El.Block size="sm">dasdsd</El.Block>
          <El.Block size="sm">dasdsd</El.Block>
        </El.Block>
      ),
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
  ],
};
