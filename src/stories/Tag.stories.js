import React from 'react';
import Tag from '../components/Tag';
import Root from '../components/Root';

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    special: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    showicon: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    }
  },
};

const Template = ({ ...args }) => (
  <Root>
    {<Tag {...args} />}
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  showicon: true,
  label: 'Informational'
};
