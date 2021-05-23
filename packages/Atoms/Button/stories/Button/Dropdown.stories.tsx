import React from 'react';
import { El } from '@numl-react/core';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Dropdown',
  component: Button,
};

const Template = function (args: any) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />

      <El.BaseElement padding="2x">
        <Button {...args}>Button</Button>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Small {...args}>Button</Button.Small>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Medium {...args}>Button</Button.Medium>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Large {...args}>Button</Button.Large>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.ExtraLarge {...args}>Button</Button.ExtraLarge>
      </El.BaseElement>
    </El.NumlProvider>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  menu: 'umer',
};

export const Special: any = Template.bind({});
Special.args = {
  menu: 'umer',
  theme: 'special',
};

export const Clear: any = Template.bind({});
Clear.args = {
  menu: 'umer',
  clear: true,
};
