import React from 'react';
import * as El from '@numl-react/elements';
import TextInput from '../src/TextInput';

export default {
  title: 'Example/Atoms/TextInput/IFTA Labels',
  component: TextInput,
};

const Template = ({ theme, ...args }) => {
  return (
    <>
      <El.Form>
        <TextInput.IFTALabels {...args} />
      </El.Form>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
};

export const WithValidation = Template.bind({});
WithValidation.args = {
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
