import React from 'react';
import Root from '../../../Components/Root';
import { Icon } from '../../Icon';
import { Button } from '../index';
import { Checkbox } from './../../Checkbox';

export default {
  title: 'Example/Atoms/ButtonGroup',
  component: Button.Group,
  argTypes: {
    size: {
      control: {
        type: 'text',
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

const Template = (args: any) => (
  <Root>
    <Button.Group {...args} />
  </Root>
);

export const Basic: any = Template.bind({});
Basic.args = {
  children: [
    <Button key="one">Button</Button>,
    <Button key="two">Button</Button>,
    <Button key="three">Button</Button>,
  ],
};

export const BasicWithDisclosure: any = Template.bind({});
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

export const BasicWithCheckbox: any = Template.bind({});
BasicWithCheckbox.args = {
  children: [
    <Button key="one">
      <Checkbox></Checkbox>Button
    </Button>,
    <Button key="two">
      <Checkbox></Checkbox>Button
    </Button>,
    <Button key="three">
      <Checkbox></Checkbox>Button
    </Button>,
  ],
};
