import { El } from '@numl-react/core';
import React from 'react';
import ResourceList from '../src/ResourceList';

export default {
  title: 'Numl React/Molecules/ResourceList',
  component: ResourceList,
};

const Template = ({ ...args }) => (
  <>
    <ResourceList {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
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
