import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/ButtonSegment/Disclosure With Icons',
  component: Button.SegmentedGroup,
};

const Template = (args: any) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button.SegmentedGroup {...args} />
  </El.NumlProvider>
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
