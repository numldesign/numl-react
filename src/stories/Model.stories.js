import React from 'react';

import Root from '../components/Root';
import Model from '../Molecules/Model';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';

export default {
  title: 'Example/Molecules/Model',
  component: Model,
};

const Template = ({ ...args }) => (
  <Root>
    <Model {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  fill: 'bg',
  border: '1bw',
  heading: (
    <nu-block size="xl" color="#text-soft">
      Reach more shoppers with Instagram product tags
    </nu-block>
  ),
  body: (
    <nu-block size="md" color="#text-soft">
      This will reset your device to its default factor settings
    </nu-block>
  ),
  footerActions: [<Button>Button</Button>, <Button special>Button</Button>],
  closeAction: (
    <Button padding="0" clear>
      <Icon name="close" />
    </Button>
  ),
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  fill: 'bg',
  border: '1bw',
  body: (
    <nu-block size="md" color="#text-soft">
      Use Instagram posts to share your products with millions of people. Let shoppers buy from your
      store without leaving Instagram.
    </nu-block>
  ),
  footerActions: [<Button>Button</Button>, <Button special>Button</Button>],
  closeAction: (
    <Button padding="0" clear>
      <Icon name="close" />
    </Button>
  ),
};
