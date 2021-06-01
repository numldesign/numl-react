import React from 'react';
import * as El from '@numl-react/elements';
import TextInput from '../src/TextInput';

export default {
  title: 'Example/Atoms/TextInput/Basic',
  component: TextInput,
};

const Template = ({ theme, ...args }) => {
  return (
    <>
      <El.Form>
        <TextInput {...args} />
      </El.Form>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
  icon: 'search-outline',
  suffix: '11/20',
  link: {
    to: '#',
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

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
};

export const WithLabelLink = Template.bind({});
WithLabelLink.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
  link: {
    to: 'https://numl.design/',
    text: 'link',
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
  icon: 'search-outline',
};

export const WithHelptext = Template.bind({});
WithHelptext.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
  icon: 'search-outline',
  helpText: 'This is a help text',
};

export const WithClearNode = Template.bind({});
WithClearNode.args = {
  label: 'Text Field',
  placeholder: 'Text Field',
  icon: 'search-outline',
  helpText: 'This is a help text',
  onClear: () => {
    console.log('onClear');
  },
};
