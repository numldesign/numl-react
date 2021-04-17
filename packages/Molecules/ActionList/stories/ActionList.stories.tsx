import React from 'react';
import { Icon } from '../../../Atoms/Icon';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { ActionList } from '../index';

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
  <NumlProvider fill="black">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <ActionList {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  header: 'FILE OPTIONS',
  children: [
    <ActionList.Item key="1" onClick={(e) => console.log('import clicked ', e)}>
      Import ActionList from './../Molecules/ActionList';
    </ActionList.Item>,
    <ActionList.Item key="2" onClick={(e) => console.log('Export clicked ', e)}>
      Export
    </ActionList.Item>,
    <ActionList.Item key="3" onClick={(e) => console.log('Duplicate clicked ', e)}>
      Duplicate
    </ActionList.Item>,
    <ActionList.Item key="4" disabled onClick={(e) => console.log('Share clicked ', e)}>
      Share
    </ActionList.Item>,
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: [
    <ActionList.Item key="1" gap="2x">
      <Icon name="download-outline" /> Import
    </ActionList.Item>,
    <ActionList.Item key="2" gap="2x">
      <Icon name="cloud-upload-outline" /> Export
    </ActionList.Item>,
    <ActionList.Item key="3" gap="2x">
      <Icon name="duplicate-outline" /> Duplicate
    </ActionList.Item>,
    <ActionList.Item key="4" gap="2x" disabled>
      <Icon name="share-social-outline" /> Share
    </ActionList.Item>,
  ],
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  children: [
    <ActionList.Item key="1" flow="row" gap="0">
      <nu-block>Blog posts</nu-block>
      <nu-block color="#text-soft">Manage your blog articles</nu-block>
    </ActionList.Item>,
    <ActionList.Item key="2" flow="row" gap="0">
      <nu-block>Blog posts</nu-block>
      <nu-block color="#text-soft">Manage your blog articles</nu-block>
    </ActionList.Item>,
    <ActionList.Item key="3" flow="row" gap="0">
      <nu-block>Blog posts</nu-block>
      <nu-block color="#text-soft">Manage your blog articles</nu-block>
    </ActionList.Item>,
    <ActionList.Item key="4" flow="row" gap="0" disabled>
      <nu-block>Blog posts</nu-block>
      <nu-block color="#text-soft">Manage blogs published to your Online Store</nu-block>
    </ActionList.Item>,
  ],
};
