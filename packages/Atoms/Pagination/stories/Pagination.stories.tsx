import React from 'react';
import Root from '../../../Components/Root';
import { Icon } from '../../Icon';
import { Pagination } from '../index';
import { Button } from './../../Button/';

export default {
  title: 'Example/Atoms/Pagination',
  component: Pagination,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    label: {
      defaultValue: 'result',
      control: {
        type: 'text',
      },
    },
    previous: {
      defaultValue: 'chevron-back',
      control: {
        type: 'text',
      },
    },
    next: {
      defaultValue: 'chevron-forward',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <Pagination {...args} />
  </Root>
);

export const Basic = Template.bind({});

export const Horizontal = Template.bind({});
Horizontal.args = {
  flow: 'column',
  previous: (
    <Button>
      <Icon name="chevron-up" />
    </Button>
  ),
  next: (
    <Button>
      <Icon name="chevron-down" />
    </Button>
  ),
};

const AttributeTemplate = ({ ...args }) => (
  <Root>
    <Pagination {...args} />
  </Root>
);

export const WithCustomIcon = AttributeTemplate.bind({});
WithCustomIcon.args = {
  previous: (
    <Button>
      <Icon name="hand-left-outline" />
    </Button>
  ),
  next: (
    <Button>
      <Icon name="hand-left-outline" />
    </Button>
  ),
};
