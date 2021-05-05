import React from 'react';
import { NumlProvider, ThemeProvider, DatePicker } from '../../../Core';

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
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
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
