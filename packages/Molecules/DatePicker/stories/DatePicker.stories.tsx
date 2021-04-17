import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import DatePicker from '../src/DatePicker';

export default {
  title: 'Example/Molecules/DatePicker',
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
  <NumlProvider fill="black">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <DatePicker {...args} />
  </NumlProvider>
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
