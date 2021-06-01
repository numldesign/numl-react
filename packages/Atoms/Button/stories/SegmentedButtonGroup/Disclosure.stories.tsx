import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/ButtonSegment/Disclosure',
  component: Button.SegmentedGroup,
};

const Template = (args: any) => (
  <>
    <Button.SegmentedGroup {...args} />
  </>
);

export const Small: any = Template.bind({});
Small.args = {
  children: [
    <Button key="one" menu="hello" type="small">
      Left
    </Button>,
    <Button key="two" menu="hello" type="small">
      Center
    </Button>,
    <Button key="three" menu="hello" type="small">
      Right
    </Button>,
  ],
};

export const Medium: any = Template.bind({});
Medium.args = {
  children: [
    <Button key="one" menu="hello" type="medium">
      Left
    </Button>,
    <Button key="two" menu="hello" type="medium">
      Center
    </Button>,
    <Button key="three" menu="hello" type="medium">
      Right
    </Button>,
  ],
};

export const Large: any = Template.bind({});
Large.args = {
  children: [
    <Button key="one" menu="hello" type="large">
      Left
    </Button>,
    <Button key="two" menu="hello" type="large">
      Center
    </Button>,
    <Button key="three" menu="hello" type="large">
      Right
    </Button>,
  ],
};

export const ExtraLarge: any = Template.bind({});
ExtraLarge.args = {
  children: [
    <Button key="one" menu="hello" type="extralarge">
      Left
    </Button>,
    <Button key="two" menu="hello" type="extralarge">
      Center
    </Button>,
    <Button key="three" menu="hello" type="extralarge">
      Right
    </Button>,
  ],
};
