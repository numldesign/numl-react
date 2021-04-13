import React from 'react';
import Root from '../../../Elements/Root';
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
  <Root fill="subtle">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
    <Checkbox.Field {...args}></Checkbox.Field>
  </Root>
);

export const Basic: any = Template.bind({});
Basic.args = {
  checked: true,
  label: 'Label Name',
};

const Template2 = ({ children, ...args }) => (
  <Root fill="subtle">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
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
