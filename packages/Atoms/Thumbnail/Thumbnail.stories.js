import React from 'react';

import Thumbnail from './Thumbnail';
import Root from './../../Components/Root';

export default {
  title: 'Example/Atoms/Thumbnail',
  component: Thumbnail,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    fit: {
      defaultValue: 'fill',
      control: {
        type: 'inline-radio',
        options: ['fill', 'none'],
      },
    },
    source: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => <Root>{<Thumbnail {...args} />}</Root>;

export const Default = Template.bind({});
