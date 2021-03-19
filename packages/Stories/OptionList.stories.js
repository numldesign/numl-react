import React from 'react';

import Root from './../Components/Root';
import OptionList from '../Molecules/OptionList';
import Thumbnail from '../Atoms/Thumbnail/Thumbnail';
import Badge from '../Atoms/Badge/Badge';
import Icon from '../Atoms/Icon/Icon';
import Button from '../Atoms/Button/Button';

export default {
  title: 'Example/Molecules/OptionList',
  component: OptionList,
};

const Template = ({ ...args }) => (
  <Root>
    <OptionList {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  padding: '1x',
  title: 'Inventory Location',
  onChange: (props) => console.log(props),
  contentWrapperProps: {
    text: 'wrap',
    items: 'center',
  },
  renderContent: ({ item }) => {
    return item.label;
  },
  renderHeader: (
    <nu-heading padding="1x 1.4x" level="6" text="cap">
      Inventory Location
    </nu-heading>
  ),
  options: [
    { value: 'byward_market', label: 'Byward Market' },
    { value: 'centretown', label: 'Centretown' },
    { value: 'hintonburg', label: 'Hintonburg' },
    { value: 'westboro', label: 'Westboro' },
    { value: 'downtown', label: 'Level 1 heading Level 1 heading Level 1 heading' },
  ],
  selected: ['0', '1'],
  multiSelect: true,
};

export const WithSection = Template.bind({});
WithSection.args = {
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  padding: '1x',
  onChange: (props) => console.log(props),
  // for section > options data, index should be unique
  sections: [
    {
      options: [
        { index: 1, value: 'type', label: 'Sale item type' },
        { index: 2, value: 'kind', label: 'Sale kind' },
      ],
    },
    {
      renderHeader: (
        <nu-heading padding="1x 1.4x" level="6" text="cap">
          Inventory Location
        </nu-heading>
      ),
      options: [
        { index: 3, value: 'source', label: 'Traffic referrer source' },
        { index: 4, value: 'host', label: 'Traffic referrer host' },
        { index: 5, value: 'path', label: 'Traffic referrer path' },
      ],
    },
  ],
  renderContent: ({ item }) => {
    return item.label;
  },
  selected: '3',
};

export const WithMultiSelectThumbnailBadge = Template.bind({});
WithMultiSelectThumbnailBadge.args = {
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  padding: '1x',
  title: 'Inventory Location',
  onChange: (props) => console.log(props),
  contentWrapperProps: {
    text: 'wrap',
    items: 'center',
  },
  renderContent: ({ item }) => {
    return (
      <nu-pane>
        <Thumbnail width="40px" source="https://source.unsplash.com/user/erondu/100x100" />
        {item.label}
        <Badge label="Neutral" padding="0 1x" />
      </nu-pane>
    );
  },
  renderHeader: (
    <nu-heading padding="1x 1.4x" level="6" text="cap">
      Inventory Location
    </nu-heading>
  ),
  options: [
    { value: 'byward_market', label: 'Byward Market' },
    { value: 'centretown', label: 'Centretown' },
    { value: 'hintonburg', label: 'Hintonburg' },
    { value: 'westboro', label: 'Westboro' },
    { value: 'downtown', label: 'Level 1 heading Level 1 heading Level 1 heading' },
  ],
  selected: ['0', '1'],
  multiSelect: true,
};

export const OptionListWithTable = Template.bind({});
OptionListWithTable.args = {
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  padding: '1x',
  title: 'Inventory Location',
  onChange: (props) => console.log(props),
  contentWrapperProps: {
    columns: '1fr',
    items: 'center stretch',
  },
  renderContent: ({ item }) => {
    return (
      <nu-grid columns="repeat(5, 1fr)" flow="column" items="center start">
        <nu-block>{item.label}</nu-block>
        <nu-block>{item.col1}</nu-block>
        <nu-block>{item.col2}</nu-block>
        <nu-block>{item.badge}</nu-block>
        <nu-block>{item.icon}</nu-block>
      </nu-grid>
    );
  },
  options: [
    {
      label: (
        <nu-pane>
          <Thumbnail
            width="40px"
            key="1"
            source="https://source.unsplash.com/user/erondu/100x100"
          />
          Byward Market
        </nu-pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <Icon name="help-circle-outline" />,
    },
    {
      label: (
        <nu-pane>
          <Thumbnail
            width="40px"
            key="1"
            source="https://source.unsplash.com/user/erondu/100x100"
          />
          Centretown
        </nu-pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <Icon name="help-circle-outline" />,
    },
    {
      label: (
        <nu-pane>
          <Thumbnail
            width="40px"
            key="1"
            source="https://source.unsplash.com/user/erondu/100x100"
          />
          Hintonburg
        </nu-pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <Icon name="help-circle-outline" />,
    },
    {
      label: (
        <nu-pane>
          <Thumbnail
            width="40px"
            key="1"
            source="https://source.unsplash.com/user/erondu/100x100"
          />
          Westboro
        </nu-pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <Icon name="help-circle-outline" />,
    },
  ],
};

export const OptionListWithTableAndInput = Template.bind({});
OptionListWithTableAndInput.args = {
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  padding: '1x',
  title: 'Inventory Location',
  onChange: (props) => console.log(props),
  contentWrapperProps: {
    columns: '36px 1fr',
    items: 'center stretch',
  },
  renderContent: ({ item }) => {
    return (
      <nu-grid columns="repeat(6, 1fr)" flow="column" items="center start">
        <nu-block>{item.label}</nu-block>
        <nu-block>{item.col1}</nu-block>
        <nu-block>{item.col2}</nu-block>
        <nu-block>{item.badge}</nu-block>
        <nu-block>{item.icon}</nu-block>
        {item.custom ? (
          <nu-block>
            <nu-pane padding="0.5x 0" key="1">
              <Button.Group>
                <Button key="1">Add</Button>
                <Button key="2">Set</Button>
              </Button.Group>
              <nu-numinput placeholder="Enter Amount" width="min 6x" />
            </nu-pane>
            <Button key="2" width="100%">
              Button
            </Button>
          </nu-block>
        ) : null}
      </nu-grid>
    );
  },
  options: [
    {
      label: (
        <nu-pane>
          <Thumbnail
            width="40px"
            key="1"
            source="https://source.unsplash.com/user/erondu/100x100"
          />
          Byward Market
        </nu-pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <Icon key="1" name="help-circle-outline" />,
      custom: [
        <nu-pane padding="0.5x 0" key="1">
          <Button.Group>
            <Button key="1">Add</Button>
            <Button key="2">Set</Button>
          </Button.Group>
          <nu-numinput placeholder="Enter Amount" width="min 6x" />
        </nu-pane>,
        <Button key="2" width="100%">
          Button
        </Button>,
      ],
    },
    {
      label: (
        <nu-pane>
          <Thumbnail
            width="40px"
            key="1"
            source="https://source.unsplash.com/user/erondu/100x100"
          />
          Centretown
        </nu-pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="2" label="Neutral" padding="0 1x" />,
      icon: <Icon key="2" name="help-circle-outline" />,
      custom: [
        <nu-pane padding="0.5x 0" key="1">
          <Button.Group>
            <Button key="1">Add</Button>
            <Button key="2">Set</Button>
          </Button.Group>
          <nu-numinput placeholder="Enter Amount" width="min 6x" />
        </nu-pane>,
        <Button key="2" width="100%">
          Button
        </Button>,
      ],
    },
  ],
  multiSelect: true,
};

export const OptionListWithCardDesign = Template.bind({});
OptionListWithCardDesign.args = {
  width: '50x',
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  padding: '1x',
  title: 'Inventory Location',
  onChange: (props) => console.log(props),
  contentWrapperProps: {
    columns: '36px 1fr',
  },
  checkboxWrapperProps: {
    padding: '1x 0',
  },
  renderContent: ({ item }) => {
    return (
      <nu-grid columns="40px 1fr" flow="column" gap="2x">
        <Thumbnail width="40px" key="1" source={item.image} />
        <nu-grid gap="0.5x" size="sm">
          <nu-block>
            <nu-block>{item.name}</nu-block>
            <nu-block color="#text-soft">{item.modelNo}</nu-block>
          </nu-block>
          <nu-block>
            <nu-block>When sold out</nu-block>
            <nu-block color="#text-soft">{item.status}</nu-block>
          </nu-block>
          <nu-pane>
            <nu-block>
              <nu-block>Available</nu-block>
              <nu-block color="#text-soft">{item.available}</nu-block>
            </nu-block>
            <nu-block>
              <nu-block>Available</nu-block>
              <nu-block color="#text-soft">{item.available}</nu-block>
            </nu-block>
          </nu-pane>
          <nu-block>
            <nu-pane padding="0.5x 0" key="1">
              <Button.Group>
                <Button key="1">Add</Button>
                <Button key="2">Set</Button>
              </Button.Group>
              <nu-numinput placeholder="Enter Amount" width="min 6x" />
            </nu-pane>
            <Button key="2" width="100%">
              Button
            </Button>
          </nu-block>
        </nu-grid>
      </nu-grid>
    );
  },
  options: [
    {
      image: 'https://source.unsplash.com/user/erondu/100x100',
      name: 'Eco-friendly shoes',
      modelNo: 'SKU-02',
      status: 'Stop selling',
      available: '0',
      custom: true,
    },
    {
      image: 'https://source.unsplash.com/user/erondu/100x100',
      name: 'Eco-friendly shoes',
      modelNo: 'SKU-02',
      status: 'Stop selling',
      available: '0',
      custom: true,
    },
  ],
  multiSelect: true,
};
