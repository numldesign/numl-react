import React from 'react';
import RangeSlider from '../components/RangeSlider';
import Root from '../components/Root';

export default {
  title: 'Example/RangeSlider',
  component: RangeSlider,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg', undefined],
      },
    },
    min: {
      control: {
        type: 'text',
      },
    },
    max: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    step: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <RangeSlider {...args} />
  </Root>
);

export const Default = Template.bind({});
