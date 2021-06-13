import { Form } from '@numl-react/core';
import React from 'react';
import TextInput from '../src/TextInput';

export default {
  title: 'Numl React/Atoms/TextInput/IFTA Labels',
  component: TextInput,
};

const Template = ({ theme, ...args }) => {
  return (
    <>
      <Form>
        <TextInput.IFTALabels {...args} />
        <Form.Submit special>Submit</Form.Submit>
      </Form>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'name',
  label: 'Text Field',
  placeholder: 'Text Field',
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  name: 'name',
  label: 'Text Field',
  placeholder: 'Text Field',
  validation: [
    {
      assert: 'required',
      message: 'This field is required',
    },
    {
      assert: 'email',
      message: 'A valid email address is required',
    },
  ],
};
