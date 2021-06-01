import React from 'react';
import * as El from '@numl-react/elements';
import Chip from '../src/Chip';

export default {
  title: 'Example/Atoms/Chip/Icons/Types',
  component: Chip,
};

const Template = function ({ ...args }) {
  return (
    <>
      <Chip {...args} />
    </>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Neutral',
  theme: 'default',
  icon: 'eye',
};
export const Special: any = Template.bind({});
Special.args = {
  label: 'Neutral',
  theme: 'special',
  icon: 'eye',
};
export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Neutral',
  theme: 'danger',
  icon: 'eye',
};
export const Warning: any = Template.bind({});
Warning.args = {
  label: 'Neutral',
  theme: 'warning',
  icon: 'eye',
};
export const Success: any = Template.bind({});
Success.args = {
  label: 'Neutral',
  theme: 'success',
  icon: 'eye',
};
