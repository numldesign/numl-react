import React from 'react';
import Root from '../../../Components/Root';
import { Icon } from '../../Icon';
import { Pagination } from '../index';

export default {
  title: 'Example/Atoms/Pagination',
  component: Pagination,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
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
  previous: <Icon name="chevron-up" />,
  next: <Icon name="chevron-down" />,
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  previous: <Icon name="hand-left-outline" />,
  next: <Icon name="hand-right-outline" />,
};
