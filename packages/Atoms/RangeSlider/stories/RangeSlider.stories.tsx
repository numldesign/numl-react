import React from 'react';
import RangeSlider from '../src/RangeSlider';

export default {
  title: 'Numl React/Atoms/RangeSlider',
  component: RangeSlider,
  argTypes: {
    size: {
      control: {
        type: 'text',
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

const Template = (args: any) => (
  <>
    <RangeSlider {...args} />
  </>
);

export const Default = Template.bind({
  min: 0,
  max: 100,
  width: '100vh',
  value: 0,
  step: 100,
  size: 'xl',
});
