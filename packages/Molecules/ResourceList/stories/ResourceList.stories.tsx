import React from 'react';
import Root from '../../../Components/Root';
import { ResourceList } from '../index';

export default {
  title: 'Example/Molecules/ResourceList',
  component: ResourceList,
};

const Template = ({ ...args }) => (
  <Root>
    <ResourceList {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  itemWrapperProps: {
    responsive: '601px',
  },
  renderItem: ({ item }) => {
    return (
      <nu-block text="wrap">
        <nu-block>{item.name}</nu-block>
        <nu-block color="#text-soft">{item.location}</nu-block>
      </nu-block>
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
      <nu-pane
        content="space-between|flex-start"
        items="center|flex-start"
        flow="row|column"
        text="wrap"
      >
        <nu-block>
          <nu-block>{item.name}</nu-block>
          <nu-block color="#text-soft">{item.location}</nu-block>
        </nu-block>
        <nu-pane gap="3x">
          <nu-block>{item.totalOrders}</nu-block>
          <nu-block>{item.cost}</nu-block>
        </nu-pane>
      </nu-pane>
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
