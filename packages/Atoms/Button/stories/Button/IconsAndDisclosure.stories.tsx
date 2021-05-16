import React from 'react';
import { El } from '@numl-react/core';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Icons With Disclosure',
  component: Button,
};

const Template = function ({ theme }) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />

      <El.BaseElement padding="2x">
        <Button.Small theme={theme}>
          <Button.Icon size="sm" name="swap-vertical-outline" />
          <Button.Label size="sm">Button</Button.Label>
          <El.DropdownIcon size="sm" />
          <Button.Popup size="sm"> Lorem Ipsum</Button.Popup>
        </Button.Small>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Medium theme={theme}>
          <Button.Icon size="md" name="swap-vertical-outline" />
          <Button.Label size="md">Button</Button.Label>
          <El.DropdownIcon size="md" />
          <Button.Popup size="md"> Lorem Ipsum</Button.Popup>
        </Button.Medium>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Large theme={theme}>
          <Button.Icon size="lg" name="swap-vertical-outline" />
          <Button.Label size="lg">Button</Button.Label>
          <El.DropdownIcon size="lg" />
          <Button.Popup size="lg"> Lorem Ipsum</Button.Popup>
        </Button.Large>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.ExtraLarge theme={theme}>
          <Button.Icon size="xl" name="swap-vertical-outline" />
          <Button.Label size="xl">Button</Button.Label>
          <El.DropdownIcon size="xl" />
          <Button.Popup size="xl"> Lorem Ipsum</Button.Popup>
        </Button.ExtraLarge>
      </El.BaseElement>
    </El.NumlProvider>
  );
};

export const Default: any = Template.bind({});
Default.args = {};

export const Special: any = Template.bind({});
Special.args = {
  theme: 'special',
};

export const Danger: any = Template.bind({});
Danger.args = {
  theme: 'danger',
};

export const Warning: any = Template.bind({});
Warning.args = {
  theme: 'warning',
};

export const Success: any = Template.bind({});
Success.args = {
  theme: 'success',
};
