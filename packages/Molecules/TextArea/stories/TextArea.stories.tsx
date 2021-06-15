import { Radio } from '@numl-react/core';
import React from 'react';
import TextArea from '../src/TextArea';

export default {
  title: 'Numl React/Molecules/TextArea',
  component: TextArea,
};

const Template = (args) => (
  <>
    <TextArea {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Text Input Field',
};

export const WithField = Template.bind({});
WithField.args = {
  placeholder: 'Enter Description here...',
  children: 'Value',
};

export const WithRadio = Template.bind({});
WithRadio.args = {
  placeholder: 'Enter Description here...',
  children: (
    <Radio.Group inline onChange={(props) => console.log('selected ', props)}>
      <Radio key="label_1" value="label_1" label="Label 1" />
      <Radio key="label_2" value="label_2" label="Label 2" />
      <Radio key="label_3" value="label_3" label="Label 3" />
    </Radio.Group>
  ),
};
