import React from "react";
import Root from "../components/Root";
import Radio from "../components/Radio";

export default {
  title: "Example/Radio",
  component: Radio,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: "inline-radio",
        options: ["xs", "sm", "md", "lg", "xl", undefined],
      },
    },
    label: {
      defaultValue: "Radio",
      control: {
        type: "text",
      },
    },
    fill: { control: "color" },
  },
};

const Template = ({ children, ...args }) => (
  <Root>{children ? <Radio.Field children={children} {...args} /> : <Radio {...args} />}</Root>
);

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  children: "Radio",
};
