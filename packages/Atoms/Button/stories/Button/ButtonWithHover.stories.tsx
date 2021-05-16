import React from 'react';
import { El } from '@numl-react/core';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Hover',
  component: Button,
};

const Template = function ({ theme, mark }) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />

      <El.BaseElement padding="2x">
        <Button.Small theme={theme} mark={mark}>
          <Button.Label size="sm">Button</Button.Label>
        </Button.Small>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Medium theme={theme} mark={mark}>
          <Button.Label size="md">Button</Button.Label>
        </Button.Medium>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Large theme={theme} mark={mark}>
          <Button.Label size="lg">Button</Button.Label>
        </Button.Large>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.ExtraLarge theme={theme} mark={mark}>
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
  mark: true,
};

export const Danger: any = Template.bind({});
Danger.args = {
  theme: 'danger',
  mark: true,
};

export const Warning: any = Template.bind({});
Warning.args = {
  theme: 'warning',
  mark: true,
};

export const Success: any = Template.bind({});
Success.args = {
  theme: 'success',
  mark: true,
};
