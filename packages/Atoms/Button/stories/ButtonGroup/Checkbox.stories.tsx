import React from 'react';
import { ThemeProvider, NumlProvider } from '@numl-react/core';
import { Button } from '../../index';

export default {
  title: 'Example/Atoms/ButtonGroup',
  component: Button.Group,
};

const Template = (args: any) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button.Group {...args} />
  </NumlProvider>
);

export const Checkbox: any = Template.bind({});
Checkbox.args = {
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
