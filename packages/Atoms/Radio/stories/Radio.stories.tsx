import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
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
  <NumlProvider>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
    {children ? <Radio.Field children={children} {...args} /> : <Radio {...args} />}
  </NumlProvider>
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
