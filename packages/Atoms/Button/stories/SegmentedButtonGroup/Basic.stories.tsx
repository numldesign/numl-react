import React from 'react';
import Button from '../../src/Button';

export default {
  title: 'Numl React/Atoms/ButtonSegment/Basic',
  component: Button.SegmentedGroup,
};

const Template = (args: any) => (
  <>
    <Button.SegmentedGroup {...args} />
  </>
);

export const Primary: any = Template.bind({});
Primary.args = {
  children: [
    <Button.Small key="two">Cancel</Button.Small>,
    <Button.Small theme="special" key="one">
      Submit
    </Button.Small>,
  ],
};

export const Small: any = Template.bind({});
Small.args = {
  children: [
    <Button.Small icon="play-back">Left</Button.Small>,
    <Button.Small icon="play-forward">Right</Button.Small>,
  ],
};

export const Medium: any = Template.bind({});
Medium.args = {
  children: [
    <Button.Medium icon="play-back">Left</Button.Medium>,
    <Button.Medium icon="play-forward">Right</Button.Medium>,
  ],
};

export const Large: any = Template.bind({});
Large.args = {
  children: [
    <Button.Large icon="play-back">Left</Button.Large>,
    <Button.Large icon="play-forward">Right</Button.Large>,
  ],
};
