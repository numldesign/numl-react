import React from 'react';
import * as El from '@numl-react/elements';
import RangeSlider from '../src/RangeSlider';

export default {
  title: 'Example/Atoms/RangeSlider',
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
  <El.NumlProvider padding="6x 2x">
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <RangeSlider {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({
  min: 0,
  max: 100,
  width: '100vh',
  value: 0,
  step: 100,
  size: 'xl',
});
