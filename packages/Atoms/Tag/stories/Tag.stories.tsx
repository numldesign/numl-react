import React from 'react';
import Root from '../../../Components/Root';
import { Tag } from '../index';

export default {
  title: 'Example/Atoms/Tag',
  component: Tag,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg', undefined],
      },
    },
    theme: {
      defaultValue: 'special',
      control: {
        type: 'select',
        options: ['special', 'success', 'warning', 'danger'],
      },
    },
    deletable: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ ...args }) => <Root>{<Tag {...args} />}</Root>;

export const Default = Template.bind({});
Default.args = {
  label: 'Neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  deletable: true,
  label: 'Informational',
};
