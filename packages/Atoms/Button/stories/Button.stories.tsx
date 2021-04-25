import React from 'react';
import { El, Button } from '../../../entry';

export default {
  title: 'Example/Atoms/Button',
  component: Button,
};

const Template = function ({ theme }) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>

      <El.Base padding="2x">
        <Button.Small theme={theme}>
          <Button.Label size="sm">Button</Button.Label>
        </Button.Small>
      </El.Base>

      <El.Base padding="2x">
        <Button.Medium theme={theme}>
          <Button.Label size="md">Button</Button.Label>
        </Button.Medium>
      </El.Base>

      <El.Base padding="2x">
        <Button.Large theme={theme}>
          <Button.Label size="lg">Button</Button.Label>
        </Button.Large>
      </El.Base>

      <El.Base padding="2x">
        <Button.ExtraLarge theme={theme}>
          <Button.Label size="lg">Button</Button.Label>
        </Button.ExtraLarge>
      </El.Base>
    </El.NumlProvider>
  );
};

export const Default: any = Template.bind({});
Default.args = {};

export const Special: any = Template.bind({});
Special.args = {
  theme: 'special',
};

const Template2 = function ({ theme }) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>

      <El.Base padding="2x">
        <Button.Small theme={theme}>
          <Button.Icon size="sm" name="swap-vertical-outline"></Button.Icon>
          <Button.Label size="sm">Button</Button.Label>
        </Button.Small>
      </El.Base>

      <El.Base padding="2x">
        <Button.Medium theme={theme}>
          <Button.Icon size="md" name="swap-vertical-outline"></Button.Icon>
          <Button.Label size="md">Button</Button.Label>
        </Button.Medium>
      </El.Base>

      <El.Base padding="2x">
        <Button.Large theme={theme}>
          <Button.Icon size="lg" name="swap-vertical-outline"></Button.Icon>
          <Button.Label size="lg">Button</Button.Label>
        </Button.Large>
      </El.Base>

      <El.Base padding="2x">
        <Button.ExtraLarge theme={theme}>
          <Button.Icon size="xl" name="swap-vertical-outline"></Button.Icon>
          <Button.Label size="xl">Button</Button.Label>
        </Button.ExtraLarge>
      </El.Base>
    </El.NumlProvider>
  );
};

export const BasicWithIcon: any = Template2.bind({});
BasicWithIcon.args = {};

const Template3 = function ({ theme }) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>

      <El.Base padding="2x">
        <Button.Small size="0.5" theme={theme}>
          <Button.Label size="sm">Button</Button.Label>
          <Button.DropDown size="sm"></Button.DropDown>
          <Button.Popup size="sm"></Button.Popup>
        </Button.Small>
      </El.Base>

      <El.Base padding="2x">
        <Button.Medium theme={theme}>
          <Button.Label size="md">Button</Button.Label>
          <Button.DropDown size="md"></Button.DropDown>
          <Button.Popup size="sm"></Button.Popup>
        </Button.Medium>
      </El.Base>

      <El.Base padding="2x">
        <Button.Large theme={theme}>
          <Button.Label size="lg">Button</Button.Label>
          <Button.DropDown size="lg"></Button.DropDown>
          <Button.Popup size="sm"></Button.Popup>
        </Button.Large>
      </El.Base>

      <El.Base padding="2x">
        <Button.ExtraLarge theme={theme}>
          <Button.Label size="xl">Button</Button.Label>
          <Button.DropDown size="xl"></Button.DropDown>
          <Button.Popup size="sm"></Button.Popup>
        </Button.ExtraLarge>
      </El.Base>
    </El.NumlProvider>
  );
};

export const BasicWithDiscloser: any = Template3.bind({});
BasicWithDiscloser.args = {};
