import React from 'react';
import { El } from '@numl-react/core';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Themes',
  component: Button,
};

const Template = function ({ theme }) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />

      <El.BaseElement padding="2x">
        <Button.Small theme={theme}>
          <Button.Label size="sm">Button</Button.Label>
        </Button.Small>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Medium theme={theme}>
          <Button.Label size="md">Button</Button.Label>
        </Button.Medium>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Large theme={theme}>
          <Button.Label size="lg">Button</Button.Label>
        </Button.Large>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.ExtraLarge theme={theme}>
          <Button.Label size="lg">Button</Button.Label>
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
