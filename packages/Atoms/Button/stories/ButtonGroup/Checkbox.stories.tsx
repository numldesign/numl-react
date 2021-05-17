import React from 'react';
import { ThemeProvider, NumlProvider } from '@numl-react/core';
import { Button } from '../../index';

export default {
  title: 'Example/Atoms/ButtonGroup/Checkbox',
  component: Button.Group,
};

const Template = (args: any) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button.Group {...args} />
  </NumlProvider>
);

export const Small: any = Template.bind({});
Small.args = {
  children: [
    <Button.Small key="one">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Small>,
    <Button.Small key="two">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Small>,
    <Button.Small key="three">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Small>,
  ],
};

export const Medium: any = Template.bind({});
Medium.args = {
  children: [
    <Button.Medium key="one">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Medium>,
    <Button.Medium key="two">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Medium>,
    <Button.Medium key="three">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Medium>,
  ],
};

export const Large: any = Template.bind({});
Large.args = {
  children: [
    <Button.Large key="one">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Large>,
    <Button.Large key="two">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Large>,
    <Button.Large key="three">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.Large>,
  ],
};

export const ExtraLarge: any = Template.bind({});
ExtraLarge.args = {
  children: [
    <Button.ExtraLarge key="one">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.ExtraLarge>,
    <Button.ExtraLarge key="two">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.ExtraLarge>,
    <Button.ExtraLarge key="three">
      <Button.Checkbox />
      <Button.Label>Button</Button.Label>
    </Button.ExtraLarge>,
  ],
};
