import React from 'react';
import { ThemeProvider, NumlProvider } from '../../../entry';
import { Button } from '../index';

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
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <Button.Group {...args} />
  </NumlProvider>
);

export const Basic: any = Template.bind({});
Basic.args = {
  children: [
    <Button key="one" toggle={false}>
      Button
    </Button>,
    <Button key="two">Button</Button>,
    <Button key="three">Button</Button>,
  ],
};

export const BasicWithDisclosure: any = Template.bind({});
BasicWithDisclosure.args = {
  children: [
    <Button key="one">
      <Button.Label text="center">Button</Button.Label>
      <Button.DropDown></Button.DropDown>
      <Button.Popup>
        <Button.Item>PopupItem</Button.Item>
        <Button.Item>PopupItem</Button.Item>
        <Button.Item>PopupItem</Button.Item>
      </Button.Popup>
    </Button>,
    <Button key="two">
      <Button.Label text="center">Button</Button.Label>
      <Button.DropDown></Button.DropDown>
      <Button.Popup>
        <Button.Item>PopupItem</Button.Item>
        <Button.Item>PopupItem</Button.Item>
        <Button.Item>PopupItem</Button.Item>
      </Button.Popup>
    </Button>,
    <Button key="three">
      Button
      <Button.DropDown></Button.DropDown>
      <Button.Popup>
        <Button.Item>PopupItem</Button.Item>
        <Button.Item>PopupItem</Button.Item>
        <Button.Item>PopupItem</Button.Item>
      </Button.Popup>
    </Button>,
  ],
};

export const BasicWithCheckbox: any = Template.bind({});
BasicWithCheckbox.args = {
  children: [
    <Button key="one">
      <Button.Checkbox is-hover="false"></Button.Checkbox>
      <Button.Label>Button</Button.Label>
    </Button>,
    <Button key="two">
      <Button.Checkbox is-hover="false"></Button.Checkbox>
      <Button.Label>Button</Button.Label>
    </Button>,
    <Button key="three">
      <Button.Checkbox is-hover="false"></Button.Checkbox>
      <Button.Label>Button</Button.Label>
    </Button>,
  ],
};
