import React from 'react';
import { NumlProvider, ThemeProvider, Radio, TextArea } from '@numl-react/core';

export default {
  title: 'Example/Molecules/TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      defaultValue: 'Text Field',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ children, fieldProps, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />

    {children || fieldProps ? (
      <TextArea.Field {...args} children={children} fieldProps={fieldProps} />
    ) : (
      <TextArea {...args} />
    )}
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Text Input Field',
};

export const WithField = Template.bind({});
WithField.args = {
  placeholder: 'Here is a simple placeholder',
  children: 'Value',
  fieldProps: {
    padding: '2x',
    radius: '1x',
    border: '1bw',
    fill: 'bg',
  },
};

export const WithRadio = Template.bind({});
WithRadio.args = {
  placeholder: 'Here is a simple placeholder',
  children: (
    <Radio.Group
      inline
      size="sm"
      onChange={(props) => console.log('selected ', props)}
    >
      <Radio key="label_1" value="label_1">
        Label 1
      </Radio>
      <Radio key="label_2" value="label_2">
        Label 2
      </Radio>
      <Radio key="label_3" value="label_3">
        Label 3
      </Radio>
    </Radio.Group>
  ),
  fieldProps: {
    padding: '2x',
    radius: '1x',
    border: '1bw',
    fill: 'bg',
  },
};
