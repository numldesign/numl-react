import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import TextInput from '../src/TextInput';

export default {
  title: 'Example/Atoms/TextInput',
  component: TextInput,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      defaultValue: 'Text Field',
      control: {
        type: 'text',
      },
    },
    prefix: {
      control: {
        type: 'text',
      },
    },
    suffix: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    clearButton: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    link: {
      control: {
        type: 'text',
      },
    },
    validationMessage: {
      control: {
        type: 'text',
      },
    },
    helpText: {
      control: {
        type: 'text',
      },
    },
    helpTextClear: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ theme, ...args }) => {
  const showInputField =
    args.label ||
    args.required ||
    args.link ||
    args.validationMessage ||
    args.helpText ||
    args.helpTextClear;
  return (
    <NumlProvider>
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

      {showInputField ? <TextInput.Field {...args} /> : <TextInput {...args} />}
    </NumlProvider>
  );
};

export const Basic = Template.bind({});

export const WithPrefixSuffix = Template.bind({});
WithPrefixSuffix.args = {
  placeholder: 'Text Field',
  prefix: 'search-outline',
  suffix: '11/20',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  placeholder: 'Text Field',
  link: 'https://numl.design/',
};
