import React from 'react';

import Root from '../components/Root';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';
import Checkbox from '../Atoms/Checkbox';

export default {
  title: 'Example/Atoms/ButtonGroup',
  component: Button.Group,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    special: {
      defaultValue: true,
      control: {
        type: 'boolean',
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
};

const Template = (args) => (
  <Root>
    <Button.Group {...args} />
  </Root>
);

export const Basic = Template.bind({});
Basic.args = {
  children: [
    <Button key="one">Button</Button>,
    <Button key="two">Button</Button>,
    <Button key="three">Button</Button>,
  ],
};

export const BasicWithDisclosure = Template.bind({});
BasicWithDisclosure.args = {
  children: [
    <Button key="one">
      Button <Icon name="chevron-down-outline"></Icon>
    </Button>,
    <Button key="two">
      Button <Icon name="chevron-down-outline"></Icon>
    </Button>,
    <Button key="three">
      Button <Icon name="chevron-down-outline"></Icon>
    </Button>,
  ],
};

export const BasicWithCheckbox = Template.bind({});
BasicWithCheckbox.args = {
  children: [
    <Button key="one">
      <Checkbox checked disabled></Checkbox>Button
    </Button>,
    <Button key="two">
      <Checkbox checked disabled></Checkbox>Button
    </Button>,
    <Button key="three">
      <Checkbox checked disabled></Checkbox>Button
    </Button>,
  ],
};
