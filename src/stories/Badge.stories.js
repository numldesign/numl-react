import React from "react";
import Badge from "../components/Badge";
import Root from "../components/Root";
import Icon from "../components/Icon";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: "inline-radio",
        options: ["sm", "md", "lg", undefined],
      },
    },
    theme: {
      defaultValue: "special",
      control: {
        type: "select",
        options: ["special", "success", "warning", "danger"],
      },
    },
    icon: {
      defaultValue: undefined,
      control: {
        type: null,
      },
    },
  },
};

const Template = ({ ...args }) => <Root>{<Badge {...args} />}</Root>;

export const Default = Template.bind({});
Default.args = {
  label: "Neutral",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Informational",
  name: "ellipse-outline",
  icon: <Icon name="ellipse-outline"></Icon>,
};
