import React from 'react';
import * as El from '@numl-react/elements';
import Radio from '../src/Radio';

export default {
  title: 'Example/Atoms/RadioGroup',
  component: Radio.Group,
};

const Template = (args) => (
  <>
    <Radio.List {...args} />
  </>
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
