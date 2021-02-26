import React from 'react';

import ActionList from '../components/ActionList';
import Icon from '../components/Icon';
import Root from '../components/Root';

export default {
  title: 'Example/Molecules/ActionList',
  component: ActionList,
  argTypes: {
    header: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <ActionList {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  header: 'FILE OPTIONS',
  padding: '0',
  onChange: (tab) => console.log('selected tab ', tab),
  children: [
    <ActionList.Item key="1" value="one">
      Import
    </ActionList.Item>,
    <ActionList.Item key="2" value="two">
      Export
    </ActionList.Item>,
    <ActionList.Item key="3" value="three">
      Duplicate
    </ActionList.Item>,
    <ActionList.Item key="4" value="four">
      Share
    </ActionList.Item>,
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  padding: '0',
  defaultValue: 'two',
  onChange: (tab) => console.log('selected tab ', tab),
  children: [
    <ActionList.Item key="1" value="one" gap="1x">
      <Icon name="download-outline" /> Import
    </ActionList.Item>,
    <ActionList.Item key="2" value="two">
      <Icon name="cloud-upload-outline" /> Export
    </ActionList.Item>,
    <ActionList.Item key="3" value="three">
      <Icon name="duplicate-outline" /> Duplicate
    </ActionList.Item>,
    <ActionList.Item key="4" value="four" disabled>
      <Icon name="share-social-outline" /> Share
    </ActionList.Item>,
  ],
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  padding: '0',
  onChange: (tab) => console.log('selected tab ', tab),
  children: [
    <ActionList.Item key="1" value="one" gap="0" flow="row">
      <nu-block>Blog posts</nu-block>
      <nu-block color="#text-soft">Manage your blog articles</nu-block>
    </ActionList.Item>,
    <ActionList.Item key="2" value="two" gap="0" flow="row">
      <nu-block>Blog posts</nu-block>
      <nu-block color="#text-soft">Manage your blog articles</nu-block>
    </ActionList.Item>,
    <ActionList.Item key="3" value="three" gap="0" flow="row">
      <nu-block>Blog posts</nu-block>
      <nu-block color="#text-soft">Manage your blog articles</nu-block>
    </ActionList.Item>,
    <ActionList.Item key="4" value="four" gap="0" flow="row" disabled>
      <nu-block>Blog posts</nu-block>
      <nu-block color="#text-soft">Manage blogs published to your Online Store</nu-block>
    </ActionList.Item>,
  ],
};
