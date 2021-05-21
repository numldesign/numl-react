import React from 'react';
import { NumlProvider, ThemeProvider, El } from '@numl-react/core';
import TextInput from '../src/TextInput';

export default {
  title: 'Example/Atoms/TextInput',
  component: TextInput,
};

const Template = ({ theme, ...args }) => {
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />
      <El.Form>
        <TextInput {...args} />
        <TextInput.IFTALabels {...args} />
      </El.Form>
    </NumlProvider>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
  icon: 'search-outline',
  suffix: '11/20',
  link: {
    to: 'https://numl.design/',
    text: 'link',
  },
  helpText: 'umer',
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

export const WithLimit = Template.bind({});
WithLimit.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
  icon: 'search-outline',
  suffix: '11/20',
  link: {
    to: 'https://numl.design/',
    text: 'link',
  },
  helpText: 'umer',
  clear: true,
  onClear: () => {
    console.log('onClear');
  },
};

export const WithPrefixSuffix = Template.bind({});
WithPrefixSuffix.args = {
  placeholder: 'Text Field',
  icon: 'search-outline',
  suffix: '11/20',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  placeholder: 'Text Field',
  link: 'https://numl.design/',
};
