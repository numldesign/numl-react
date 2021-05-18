import React from 'react';
import { ThemeProvider, NumlProvider, El } from '@numl-react/core';
import { Button } from '../../index';

export default {
  title: 'Example/Atoms/ButtonGroup/Disclosure With Icons',
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
    <Button.Dropdown key="one" label="Left" type="small" icon="play-back">
      Hello
    </Button.Dropdown>,
    <Button.Dropdown key="two" label="Center" type="small">
      Hello
    </Button.Dropdown>,
    <Button.Dropdown key="three" label="Right" type="small" icon="play-forward">
      Hello
    </Button.Dropdown>,
  ],
};

export const Medium: any = Template.bind({});
Medium.args = {
  children: [
    <Button.Dropdown key="one" label="Left" type="medium" icon="play-back">
      Hello
    </Button.Dropdown>,
    <Button.Dropdown key="two" label="Center" type="medium">
      Hello
    </Button.Dropdown>,
    <Button.Dropdown
      key="three"
      label="Right"
      type="medium"
      icon="play-forward"
    >
      Hello
    </Button.Dropdown>,
  ],
};

export const Large: any = Template.bind({});
Large.args = {
  children: [
    <Button.Dropdown key="one" label="Left" type="large" icon="play-back">
      Hello
    </Button.Dropdown>,
    <Button.Dropdown key="two" label="Center" type="large">
      Hello
    </Button.Dropdown>,
    <Button.Dropdown key="three" label="Right" type="large" icon="play-forward">
      Hello
    </Button.Dropdown>,
  ],
};

export const ExtraLarge: any = Template.bind({});
ExtraLarge.args = {
  children: [
    <Button.Dropdown key="one" label="Left" type="extralarge" icon="play-back">
      Hello
    </Button.Dropdown>,
    <Button.Dropdown key="two" label="Center" type="extralarge">
      Hello
    </Button.Dropdown>,
    <Button.Dropdown
      key="three"
      label="Right"
      type="extralarge"
      icon="play-forward"
    >
      Hello
    </Button.Dropdown>,
  ],
};
