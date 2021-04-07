import React from 'react';
import { Button } from '../../../Atoms/Button';
import { Icon } from '../../../Atoms/Icon';
import { Block } from '../../../Components/Block';
import Root from '../../../Components/Root';
import { Modal } from '../index';

export default {
  title: 'Example/Molecules/Modal',
  component: Modal,
};

const Template = ({ ...args }) => (
  <Root>
    <Modal {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  fill: 'bg',
  border: '1bw',
  heading: (
    <Block size="xl" color="#text-soft">
      Reach more shoppers with Instagram product tags
    </Block>
  ),
  body: (
    <Block size="md" color="#text-soft">
      This will reset your device to its default factor settings
    </Block>
  ),
  footerActions: [
    <Button key="1">Button</Button>,
    <Button key="2" special>
      Button
    </Button>,
  ],
  closeAction: (
    <Button padding="0">
      <Icon name="close" />
    </Button>
  ),
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  fill: 'bg',
  border: '1bw',
  body: (
    <Block size="md" color="#text-soft">
      Use Instagram posts to share your products with millions of people. Let
      shoppers buy from your store without leaving Instagram.
    </Block>
  ),
  footerActions: [
    <Button key="1">Button</Button>,
    <Button key="2" special>
      Button
    </Button>,
  ],
  closeAction: (
    <Button padding="0" clear>
      <Icon name="close" />
    </Button>
  ),
};
