import React from 'react';
import Checkbox from '../components/Checkbox';
import CheckboxField from '../components/CheckboxField';
import Root from '../components/Root';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    label: {
      defaultValue: 'Checkbox',
      control: {
        type: 'text',
      },
    }
  },
};

const TemplateCheckbox = ({ label, ...args }) => (
  <Root>
    {label ? <CheckboxField
      label={label}
      {...args}
    /> : <Checkbox
      {...args}
    />}
  </Root>
);

export const Basic = TemplateCheckbox.bind({});
Basic.args = {
  checked: false,
  label: '',
};

export const WithLabel = TemplateCheckbox.bind({});
WithLabel.args = {
  checked: false,
  label: 'Checkbox',
};
