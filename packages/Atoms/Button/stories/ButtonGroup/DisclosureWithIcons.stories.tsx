import React from 'react';
import Button from '../../src/Button';

export default {
  title: 'Numl React/Atoms/ButtonGroup/Disclosure With Icons',
  component: Button.Group,
};

const Template = (args: any) => (
  <>
    <Button.Group {...args} />
  </>
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
