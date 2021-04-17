import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { ProgressBar } from '../index';

export default {
  title: 'Example/Atoms/ProgressBar',
  component: ProgressBar,
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
  },
};

const Template = function ({ ...args }) {
  return (
    <NumlProvider fill="black">
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      <ProgressBar {...args} />
    </NumlProvider>
  );
};

export const Default = Template.bind({});
