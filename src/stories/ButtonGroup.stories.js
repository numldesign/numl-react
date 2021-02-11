import React from "react";
import Root from "../components/Root";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Checkbox from "../components/Checkbox"

export default {
  title: "Example/ButtonGroup",
  component: Button.Group,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: "inline-radio",
        options: ["xs", "sm", "md", "lg", "xl", undefined],
      },
    },
    inline: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    special: {
      defaultValue: true,
      control: {
        type: 'boolean',
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
    <Button>Button</Button>,
    <Button>Button</Button>,
    <Button>Button</Button>
  ]
}

export const BasicWithDisclosure = Template.bind({});
BasicWithDisclosure.args = {
  children: [
    <Button>Button <Icon name='chevron-down-outline'></Icon></Button>,
    <Button>Button <Icon name='chevron-down-outline'></Icon></Button>,
    <Button>Button <Icon name='chevron-down-outline'></Icon></Button>
  ]
}

export const BasicWithCheckbox = Template.bind({});
BasicWithCheckbox.args = {
  children: [
    <Button><Checkbox checked disabled ></Checkbox>Button</Button>,
    <Button><Checkbox checked disabled ></Checkbox>Button</Button>,
    <Button><Checkbox checked disabled ></Checkbox>Button</Button>
  ],
};
