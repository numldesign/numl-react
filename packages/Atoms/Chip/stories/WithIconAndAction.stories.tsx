import React from 'react';
import Chip from '../src/Chip';

export default {
  title: 'Numl React/Atoms/Chip/With Icon Text And Action',
  component: Chip,
};

const Template = function ({ ...args }) {
  return (
    <>
      <Chip {...args}></Chip>
    </>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Neutral',
  icon: 'checkmark-outline',
  onAction: () => {
    console.log('Action Clicked');
  },
};
export const Special: any = Template.bind({});
Special.args = {
  label: 'Neutral',
  theme: 'special',
  icon: 'checkmark-outline',
  onAction: () => {
    console.log('Action Clicked');
  },
};
export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Neutral',
  theme: 'danger',
  icon: 'checkmark-outline',
  onAction: () => {
    console.log('Action Clicked');
  },
};
export const Warning: any = Template.bind({});
Warning.args = {
  label: 'Neutral',
  theme: 'warning',
  icon: 'checkmark-outline',
  onAction: () => {
    console.log('Action Clicked');
  },
};
export const Success: any = Template.bind({});
Success.args = {
  label: 'Neutral',
  theme: 'success',
  icon: 'checkmark-outline',
  onAction: () => {
    console.log('Action Clicked');
  },
};
