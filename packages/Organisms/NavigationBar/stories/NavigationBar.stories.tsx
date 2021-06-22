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

const Template = ({ items, footer }) => (
  <>
    <El.Block height="100vh">
      <NavigationBar footer={footer}>
        <NavigationBar.Section items={items} />
        <NavigationBar.Section items={items} title="Analytics" />
      </NavigationBar>
    </El.Block>
  </>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      icon: 'home',
      label: 'Home',
    },
    {
      icon: 'download-outline',
      label: 'Order',
      count: '15',
    },
    {
      icon: 'pricetag-outline',
      label: 'Products',
    },
    {
      icon: 'person-outline',
      label: 'Customer',
    },
    {
      icon: 'bar-chart-outline',
      label: 'Analytics',
    },
    {
      icon: 'megaphone-outline',
      label: 'Marketing',
    },
    {
      icon: 'discount-outline',
      label: 'Discount',
    },
    {
      icon: 'apps-outline',
      label: 'Apps',
    },
    {
      icon: 'page-builder-outline',
      label: 'Page Builder',
    },
    {
      icon: 'documents-outline',
      label: 'Form Builder',
    },
    {
      icon: 'subscription-outline',
      label: 'Subscription',
      subNavigationItems: [
        {
          icon: 'apps-outline',
          label: 'Apps',
        },
        {
          icon: 'page-builder-outline',
          label: 'Page Builder',
        },
        {
          icon: 'documents-outline',
          label: 'Form Builder',
          subNavigationItems: [
            {
              icon: 'apps-outline',
              label: 'Apps',
            },
            {
              icon: 'page-builder-outline',
              label: 'Page Builder',
            },
          ],
        },
      ],
    },
  ],
  footer: [
    <NavigationBar.Item icon="settings-outline">Settings</NavigationBar.Item>,
  ],
};
