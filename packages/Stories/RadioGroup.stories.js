import React from 'react';
import Root from './../Components/Root';
import Radio from '../Atoms/Radio/Radio';

export default {
  title: 'Example/Atoms/RadioGroup',
  component: Radio.Group,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    inline: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => (
  <Root>
    <Radio.Group {...args} />
  </Root>
);

export const Basic = Template.bind({});
Basic.args = {
  children: [
    <Radio.Field key="one" value="one">
      One
    </Radio.Field>,
    <Radio.Field key="two" value="two">
      Two
    </Radio.Field>,
  ],
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  children: [
    <Radio.Field key="one" value="one">
      One
    </Radio.Field>,
    <Radio.Field key="two" value="two">
      Two
    </Radio.Field>,
  ],
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  value: 'two',
  children: [
    <Radio.Field key="one" value="one">
      One
    </Radio.Field>,
    <Radio.Field key="two" value="two">
      Two
    </Radio.Field>,
  ],
};
