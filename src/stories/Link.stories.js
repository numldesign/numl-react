import React from 'react';
import Root from '../components/Root';
import Link from '../components/Link';

import Icon from '../components/Icon';

export default {
  title: 'Example/Link',
  component: Link,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    to: {
      defaultValue: 'https://numl.design',
      control: {
        type: 'text',
      },
    },
    label: {
      defaultValue: 'fulfulling orders',
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <Link {...args} />
  </Root>
);

export const Basic = Template.bind({});
Basic.args = {
  to: 'https://numl.design',
  label: 'fulfulling orders',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  to: 'https://numl.design',
  label: 'Foneu Help Center',
  icon: <Icon name="exit-outline" text="top" padding="0 1px" />,
};
