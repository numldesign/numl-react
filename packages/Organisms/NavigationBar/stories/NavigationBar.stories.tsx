import React from 'react';
import * as El from '@numl-react/elements';
import NavigationBar from '../src/NavigationBar';

export default {
  title: 'Example/Organisms/NavigationBar',
  component: NavigationBar,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <El.NumlProvider padding="0">
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />

    <NavigationBar {...args} />
  </El.NumlProvider>
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
