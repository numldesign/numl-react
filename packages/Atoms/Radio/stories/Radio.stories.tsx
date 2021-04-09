import React from 'react';
import Root from '../../../Components/Root';
import { Radio } from '../index';

export default {
  title: 'Example/Atoms/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },

    label: {
      defaultValue: 'Radio',
      control: {
        type: 'text',
      },
    },
    fill: { control: 'color' },
  },
};

const Template = ({ children, ...args }) => (
  <Root>{children ? <Radio.Field children={children} {...args} /> : <Radio {...args} />}</Root>
);

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  children: 'Radio',
};
