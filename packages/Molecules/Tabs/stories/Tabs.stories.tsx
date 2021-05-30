import React from 'react';
import { El, Icon, El } from '@numl-react/core';
import Tabs from '../src/Tabs';
import Button from '../../../Atoms/Button/src/Button';

export default {
  title: 'Example/Molecules/Tabs',
  component: Tabs,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Tabs {...args} />
  </El.NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  size: 'sm',
  value: 'accept',
  onChange: (tab) => console.log('selected tab ', tab),
  children: [
    <Tabs.Item key="1" flex="1" padding="1.5x" tab="library" label="Library">
      <El.Block>Library Content</El.Block>
      <El.Block>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </El.Block>
    </Tabs.Item>,
    <Tabs.Item
      key="2"
      flex="1"
      padding="1.5x"
      tab="accept"
      label="Accepts Marketing"
    >
      <El.Block>Accepts Marketing Content</El.Block>
      <El.Block>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </El.Block>
    </Tabs.Item>,
  ],
};

export const WithPrefixSuffixTab = Template.bind({});
WithPrefixSuffixTab.args = {
  prefix: <Button icon="menu" clear />,
  value: 'accept',
  onChange: (tab) => console.log('selected tab ', tab),
  children: [
    <Tabs.Item
      key="1"
      tab="library"
      label="Library"
      prefix={<Icon name="checkmark" />}
      suffix={<Icon name="chevron-down" />}
    >
      <El.Block>Library Content</El.Block>
      <El.Block>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </El.Block>
    </Tabs.Item>,
    <Tabs.Item
      key="2"
      tab="accept"
      label="Accepts Marketing"
      prefix={<Icon name="checkmark" />}
      suffix={<Icon name="chevron-down" />}
    >
      <El.Block>Accepts Marketing Content</El.Block>
      <El.Block>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </El.Block>
    </Tabs.Item>,
  ],
};
