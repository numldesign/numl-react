import React from 'react';
import { NumlProvider, ThemeProvider, Tabs, Icon } from '@numl-react/core';

export default {
  title: 'Example/Molecules/Tabs',
  component: Tabs,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Tabs {...args} />
  </NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  size: 'sm',
  padding: '0 2x',
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  defaultValue: 'accept',
  onChange: (tab) => console.log('selected tab ', tab),
  children: [
    <Tabs.Item key="1" flex="1" padding="1.5x" tab="library" label="Library">
      Library Content
    </Tabs.Item>,
    <Tabs.Item
      key="2"
      flex="1"
      padding="1.5x"
      tab="accept"
      label="Accepts Marketing"
    >
      Accepts Marketing Content
    </Tabs.Item>,
  ],
};

export const WithPrefixSuffixTab = Template.bind({});
WithPrefixSuffixTab.args = {
  prefix: <Icon name="menu" />,
  size: 'sm',
  padding: '0 2x',
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  defaultValue: 'accept',
  onChange: (tab) => console.log('selected tab ', tab),
  children: [
    <Tabs.Item
      key="1"
      padding="1.5x"
      tab="library"
      label="Library"
      prefix={<Icon name="checkmark" />}
      suffix={<Icon name="chevron-down" />}
    >
      Library Content
    </Tabs.Item>,
    <Tabs.Item
      key="2"
      padding="1.5x"
      tab="accept"
      label="Accepts Marketing"
      prefix={<Icon name="checkmark" />}
      suffix={<Icon name="chevron-down" />}
    >
      Accepts Marketing Content
    </Tabs.Item>,
  ],
};
