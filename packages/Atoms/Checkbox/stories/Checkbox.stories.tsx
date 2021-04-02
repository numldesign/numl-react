import React from 'react';
import Root from '../../../Components/Root';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Example/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'text',
      },
    },
    checked: {
      defaultValue: 'Checkbox',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ children, ...args }) => (
  <Root>
    <Checkbox.Field {...args}></Checkbox.Field>
  </Root>
);

export const Basic: any = Template.bind({});
Basic.args = {
  checked: true,
  label: 'Label Name',
};

const Template2 = ({ children, ...args }) => (
  <Root>
    <Checkbox.Field {...args}>
      <Checkbox.Label>{children}</Checkbox.Label>
    </Checkbox.Field>
  </Root>
);
export const WithLabel: any = Template2.bind({});
WithLabel.args = {
  checked: true,
  children: 'Label Name',
};
