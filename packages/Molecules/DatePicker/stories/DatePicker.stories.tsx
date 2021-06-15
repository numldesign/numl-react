import { DatePicker } from '@numl-react/core';
import React from 'react';

export default {
  title: 'Numl React/Molecules/DatePicker',
  component: DatePicker,
  argTypes: {
    username: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <>
    <DatePicker {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  value: new Date('02-22-19'),
  onChange: (props) => console.log(props),
};

export const WithRangeMode = Template.bind({});
WithRangeMode.args = {
  value: [new Date('02-01-19'), new Date('02-22-19')],
  mode: 'range',
  onChange: (props) => console.log(props),
};
