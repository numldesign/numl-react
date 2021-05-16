import React from 'react';
import { ThemeProvider, NumlProvider, El } from '@numl-react/core';
import { Button } from '../../index';

export default {
  title: 'Example/Atoms/ButtonGroup/Disclosure',
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
      <Button.Label text="center">Left</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Small>,
    <Button.Small key="two">
      <Button.Label text="center">Center</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Small>,
    <Button.Small key="three">
      <Button.Label text="center">Right</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Small>,
  ],
};

export const Medium: any = Template.bind({});
Medium.args = {
  children: [
    <Button.Medium key="one">
      <Button.Label text="center">Left</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Medium>,
    <Button.Medium key="two">
      <Button.Label text="center">Center</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Medium>,
    <Button.Medium key="three">
      <Button.Label text="center">Right</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Medium>,
  ],
};

export const Large: any = Template.bind({});
Large.args = {
  children: [
    <Button.Large key="one">
      <Button.Label text="center">Left</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Large>,
    <Button.Large key="two">
      <Button.Label text="center">Center</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Large>,
    <Button.Large key="three">
      <Button.Label text="center">Right</Button.Label>
      <El.DropdownIcon />
      <Button.Popup>Hello</Button.Popup>
    </Button.Large>,
  ],
};
