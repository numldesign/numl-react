import React from 'react';
import { ThemeProvider, NumlProvider, El } from '@numl-react/core';
import { Button } from '../../index';

export default {
  title: 'Example/Atoms/ButtonGroup/Basic',
  component: Button.Group,
};

const Template = (args: any) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button.Group {...args} />
  </NumlProvider>
);

export const Primary: any = Template.bind({});
Primary.args = {
  width: '20',
  flex: true,
  gap: '2x',
  children: [
    <Button.Small key="two" radius>
      Cancel
    </Button.Small>,
    <Button.Small theme="special" key="one" radius>
      Submit
    </Button.Small>,
  ],
};

export const Small: any = Template.bind({});
Small.args = {
  children: [
    <Button.Small key="one">
      <Button.Icon name="play-back" />
      Left
    </Button.Small>,
    <Button.Small key="two">Center</Button.Small>,
    <Button.Small key="three">
      Right
      <Button.Icon name="play-forward" />
    </Button.Small>,
  ],
};

export const Medium: any = Template.bind({});
Medium.args = {
  children: [
    <Button.Medium key="one">
      <Button.Icon name="play-back" />
      Left
    </Button.Medium>,
    <Button.Medium key="two">Center</Button.Medium>,
    <Button.Medium key="three">
      Right
      <Button.Icon name="play-forward" />
    </Button.Medium>,
  ],
};

export const Large: any = Template.bind({});
Large.args = {
  children: [
    <Button.Large key="one">
      <Button.Icon name="play-back" />
      Left
    </Button.Large>,
    <Button.Large key="two">Center</Button.Large>,
    <Button.Large key="three">
      Right
      <Button.Icon name="play-forward" />
    </Button.Large>,
  ],
};
