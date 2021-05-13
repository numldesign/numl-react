import React from 'react';
import {
  NumlProvider,
  ThemeProvider,
  ResourceList,
  El,
} from '@numl-react/core';

export default {
  title: 'Example/Molecules/ResourceList',
  component: ResourceList,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <ResourceList {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  itemWrapperProps: {
    responsive: '601px',
  },
  renderItem: ({ item }) => (
    <El.Block text="wrap">
      <El.Block>{item.name}</El.Block>
      <El.Block color="#text-soft">{item.location}</El.Block>
    </El.Block>
  ),
  items: [
    {
      id: 100,
      avatar: 'Seong-Hyeon Kavalioŭ',
      name: 'Seong-Hyeon Kavalioŭ',
      location: 'Bucharest, Romania',
    },
    {
      id: 200,
      avatar: 'Seong-Hyeon Kavalioŭ',
      name: 'Seong-Hyeon Kavalioŭ',
      location: 'Bucharest, Romania',
    },
    {
      id: 300,
      name: 'Seong-Hyeon Kavalioŭ',
      location: 'Bucharest, Romania',
    },
  ],
};

export const WithMultiSelect = Template.bind({});
WithMultiSelect.args = {
  multiSelect: true,
  selected: '200',
  itemWrapperProps: {
    responsive: '601px',
  },
  renderItem: ({ item }) => (
    <El.Pane
      content="space-between|flex-start"
      items="center|flex-start"
      flow="row|column"
      text="wrap"
    >
      <El.Block>
        <El.Block>{item.name}</El.Block>
        <El.Block color="#text-soft">{item.location}</El.Block>
      </El.Block>
      <El.Pane gap="3x">
        <El.Block>{item.totalOrders}</El.Block>
        <El.Block>{item.cost}</El.Block>
      </El.Pane>
    </El.Pane>
  ),
  items: [
    {
      id: 100,
      avatar: 'Seong-Hyeon Kavalioŭ',
      name: 'Seong-Hyeon Kavalioŭ',
      location: 'Bucharest, Romania',
      totalOrders: '4 orders',
      cost: '$108.12 spent',
    },
    {
      id: 200,
      avatar: 'Seong-Hyeon Kavalioŭ',
      name: 'Seong-Hyeon Kavalioŭ',
      location: 'Bucharest, Romania',
      totalOrders: '4 orders',
      cost: '$108.12 spent',
    },
    {
      id: 300,
      name: 'Seong-Hyeon Kavalioŭ',
      location: 'Bucharest, Romania',
      totalOrders: '4 orders',
      cost: '$108.12 spent',
    },
  ],
};
