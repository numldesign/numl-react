import React from "react";
import Checkbox from "../components/Checkbox";
import Root from "../components/Root";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: "inline-radio",
        options: ["xs", "sm", "md", "lg", "xl", undefined],
      },
    },
    label: {
      defaultValue: "Checkbox",
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ children, ...args }) => (
  <Root>
    {children ? <Checkbox.Field children={children} {...args} /> : <Checkbox {...args} />}
  </Root>
);

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  children: "Checkbox",
};
