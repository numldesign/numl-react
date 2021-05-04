import React from 'react';
import { Badge, El, OptionList, Thumbnail } from '../../../entry';

export default {
  title: 'Example/Molecules/OptionList',
  component: OptionList,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
    <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>

    <OptionList {...args} />
  </El.NumlProvider>
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
    <El.Heading padding="1x 1.5x" level="6" text="cap">
      Inventory Location
    </El.Heading>
  ),
  options: [
    { value: 'byward_market', label: 'Byward Market' },
    { value: 'centretown', label: 'Centretown' },
    { value: 'hintonburg', label: 'Hintonburg' },
    { value: 'westboro', label: 'Westboro' },
    {
      value: 'downtown',
      label: 'Level 1 heading Level 1 heading Level 1 heading',
    },
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
        <El.Heading padding="1x 1.5x" level="6" text="cap">
          Inventory Location
        </El.Heading>
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
      <El.Pane>
        <Thumbnail width="40px" source="https://source.unsplash.com/user/erondu/100x100" />
        {item.label}
        <Badge label="Neutral" padding="0 1x" />
      </El.Pane>
    );
  },
  renderHeader: (
    <El.Heading padding="1x 1.5x" level="6" text="cap">
      Inventory Location
    </El.Heading>
  ),
  options: [
    { value: 'byward_market', label: 'Byward Market' },
    { value: 'centretown', label: 'Centretown' },
    { value: 'hintonburg', label: 'Hintonburg' },
    { value: 'westboro', label: 'Westboro' },
    {
      value: 'downtown',
      label: 'Level 1 heading Level 1 heading Level 1 heading',
    },
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
      <El.Grid columns="repeat(5, 1fr)" flow="column" items="center start">
        <El.Block>{item.label}</El.Block>
        <El.Block>{item.col1}</El.Block>
        <El.Block>{item.col2}</El.Block>
        <El.Block>{item.badge}</El.Block>
        <El.Block>{item.icon}</El.Block>
      </El.Grid>
    );
  },
  options: [
    {
      label: (
        <El.Pane>
          <Thumbnail width="40px" key="1" source="https://source.unsplash.com/user/erondu/100x100" />
          Byward Market
        </El.Pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <El.Icon name="help-circle-outline" />,
    },
    {
      label: (
        <El.Pane>
          <Thumbnail width="40px" key="1" source="https://source.unsplash.com/user/erondu/100x100" />
          Centretown
        </El.Pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <El.Icon name="help-circle-outline" />,
    },
    {
      label: (
        <El.Pane>
          <Thumbnail width="40px" key="1" source="https://source.unsplash.com/user/erondu/100x100" />
          Hintonburg
        </El.Pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <El.Icon name="help-circle-outline" />,
    },
    {
      label: (
        <El.Pane>
          <Thumbnail width="40px" key="1" source="https://source.unsplash.com/user/erondu/100x100" />
          Westboro
        </El.Pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <El.Icon name="help-circle-outline" />,
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
      <El.Grid columns="repeat(6, 1fr)" flow="column" items="center start">
        <El.Block>{item.label}</El.Block>
        <El.Block>{item.col1}</El.Block>
        <El.Block>{item.col2}</El.Block>
        <El.Block>{item.badge}</El.Block>
        <El.Block>{item.icon}</El.Block>
        {item.custom ? (
          <El.Block>
            <El.Pane padding="0.5x 0" key="1">
              <El.ButtonGroup>
                <El.Button key="1">Add</El.Button>
                <El.Button key="2">Set</El.Button>
              </El.ButtonGroup>
              <El.NumberInput placeholder="Enter Amount" width="min 6x" />
            </El.Pane>
            <El.Button key="2" width="100%">
              Button
            </El.Button>
          </El.Block>
        ) : null}
      </El.Grid>
    );
  },
  options: [
    {
      label: (
        <El.Pane>
          <Thumbnail width="40px" key="1" source="https://source.unsplash.com/user/erondu/100x100" />
          Byward Market
        </El.Pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="1" label="Neutral" padding="0 1x" />,
      icon: <El.Icon key="1" name="help-circle-outline" />,
      custom: [
        <El.Pane padding="0.5x 0" key="1">
          <El.ButtonGroup>
            <El.Button key="1">Add</El.Button>
            <El.Button key="2">Set</El.Button>
          </El.ButtonGroup>
          <El.NumberInput placeholder="Enter Amount" width="min 6x" />
        </El.Pane>,
        <El.Button key="2" width="100%">
          Button
        </El.Button>,
      ],
    },
    {
      label: (
        <El.Pane>
          <Thumbnail width="40px" key="1" source="https://source.unsplash.com/user/erondu/100x100" />
          Centretown
        </El.Pane>
      ),
      col1: 'Default',
      col2: 'Default',
      badge: <Badge key="2" label="Neutral" padding="0 1x" />,
      icon: <El.Icon key="2" name="help-circle-outline" />,
      custom: [
        <El.Pane padding="0.5x 0" key="1">
          <El.ButtonGroup>
            <El.Button key="1">Add</El.Button>
            <El.Button key="2">Set</El.Button>
          </El.ButtonGroup>
          <El.NumberInput placeholder="Enter Amount" width="min 6x" />
        </El.Pane>,
        <El.Button key="2" width="100%">
          Button
        </El.Button>,
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
      <El.Grid columns="40px 1fr" flow="column" gap="2x">
        <Thumbnail width="40px" key="1" source={item.image} />
        <El.Grid gap="0.5x" size="sm">
          <El.Block>
            <El.Block>{item.name}</El.Block>
            <El.Block color="#text-soft">{item.modelNo}</El.Block>
          </El.Block>
          <El.Block>
            <El.Block>When sold out</El.Block>
            <El.Block color="#text-soft">{item.status}</El.Block>
          </El.Block>
          <El.Pane>
            <El.Block>
              <El.Block>Available</El.Block>
              <El.Block color="#text-soft">{item.available}</El.Block>
            </El.Block>
            <El.Block>
              <El.Block>Available</El.Block>
              <El.Block color="#text-soft">{item.available}</El.Block>
            </El.Block>
          </El.Pane>
          <El.Block>
            <El.Pane padding="0.5x 0" key="1">
              <El.ButtonGroup>
                <El.Button key="1">Add</El.Button>
                <El.Button key="2">Set</El.Button>
              </El.ButtonGroup>
              <El.NumberInput placeholder="Enter Amount" width="min 6x" />
            </El.Pane>
            <El.Button key="2" width="100%">
              Button
            </El.Button>
          </El.Block>
        </El.Grid>
      </El.Grid>
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
