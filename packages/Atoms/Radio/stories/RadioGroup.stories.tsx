import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import Radio from '../src/Radio';

export default {
  title: 'Example/Atoms/RadioGroup',
  component: Radio.Group,
};

const Template = (args) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />

    <Radio.List {...args} />
  </NumlProvider>
);

export const Basic: any = Template.bind({});
Basic.args = {
  value: 'four',
  list: [
    {
      label: 'one',
      value: 'one',
    },
    {
      label: 'two',
      value: 'two',
    },
    {
      label: 'three',
      value: 'three',
    },
    {
      label: 'four',
      value: 'four',
    },
  ],
};
