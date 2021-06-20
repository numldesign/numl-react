import React from 'react';
import NavigationBar from '../src/NavigationBar';
import { El } from '@numl-react/core';

export default {
  title: 'Numl React/Organisms/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'none',
  },
};

const Template = ({ ...args }) => (
  <>
    <El.Block height="100vh">
      <NavigationBar {...args} />
    </El.Block>
  </>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      icon: 'home',
      text: 'Home',
    },
    {
      icon: 'download-outline',
      text: 'Order',
      count: '15',
    },
    {
      icon: 'pricetag-outline',
      text: 'Products',
    },
    {
      icon: 'person-outline',
      text: 'Customer',
    },
    {
      icon: 'bar-chart-outline',
      text: 'Analytics',
    },
    {
      icon: 'megaphone-outline',
      text: 'Marketing',
    },
    {
      icon: 'discount-outline',
      text: 'Discount',
    },
    {
      icon: 'apps-outline',
      text: 'Apps',
    },
    {
      icon: 'page-builder-outline',
      text: 'Page Builder',
    },
    {
      icon: 'documents-outline',
      text: 'Form Builder',
    },
    {
      icon: 'subscription-outline',
      text: 'Subscription',
    },
  ],
};
