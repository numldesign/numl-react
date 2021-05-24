import React from 'react';
import { ThemeProvider, NumlProvider } from '@numl-react/core';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/ButtonSegment/Disclosure With Icons',
  component: Button.SegmentedGroup,
};

const Template = (args: any) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button.SegmentedGroup {...args} />
  </NumlProvider>
);

export const Small: any = Template.bind({});
Small.args = {
  children: [
    <Button menu="hello" type="small" icon="play-back">
      Left
    </Button>,
    <Button menu="hello" type="small">
      Center
    </Button>,
    <Button menu="hello" type="small" icon="play-forward">
      Right
    </Button>,
  ],
};

export const Medium: any = Template.bind({});
Medium.args = {
  children: [
    <Button menu="hello" type="medium" icon="play-back">
      Left
    </Button>,
    <Button menu="hello" type="medium">
      Center
    </Button>,
    <Button menu="hello" type="medium" icon="play-forward">
      Right
    </Button>,
  ],
};

export const Large: any = Template.bind({});
Large.args = {
  children: [
    <Button menu="hello" type="large" icon="play-back">
      Left
    </Button>,
    <Button menu="hello" type="large">
      Center
    </Button>,
    <Button menu="hello" type="large" icon="play-forward">
      Right
    </Button>,
  ],
};

export const ExtraLarge: any = Template.bind({});
ExtraLarge.args = {
  children: [
    <Button menu="hello" type="extralarge" icon="play-back">
      Left
    </Button>,
    <Button menu="hello" type="extralarge">
      Center
    </Button>,
    <Button menu="hello" type="extralarge" icon="play-forward">
      Right
    </Button>,
  ],
};
