import React from 'react';
import { NumlProvider, ThemeProvider, ResourceList, Block, Pane } from '../../../entry';

export default {
  title: 'Example/Molecules/ResourceList',
  component: ResourceList,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <ResourceList {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  itemWrapperProps: {
    responsive: '601px',
  },
  renderItem: ({ item }) => {
    return (
      <Block text="wrap">
        <Block>{item.name}</Block>
        <Block color="#text-soft">{item.location}</Block>
      </Block>
    );
  },
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
  renderItem: ({ item }) => {
    return (
      <Pane content="space-between|flex-start" items="center|flex-start" flow="row|column" text="wrap">
        <Block>
          <Block>{item.name}</Block>
          <Block color="#text-soft">{item.location}</Block>
        </Block>
        <Pane gap="3x">
          <Block>{item.totalOrders}</Block>
          <Block>{item.cost}</Block>
        </Pane>
      </Pane>
    );
  },
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
