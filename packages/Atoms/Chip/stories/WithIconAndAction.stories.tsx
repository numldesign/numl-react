import React from 'react';
import { Icon, NumlProvider, ThemeProvider } from '@numl-react/core';
import Chip from '../src/Chip';

export default {
  title: 'Example/Atoms/Chip/With Icon Text And Action',
  component: Chip,
};

const Template = function ({ ...args }) {
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />
      <Chip {...args}></Chip>
    </NumlProvider>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Neutral',
  icon: 'happy',
  action: 'close-circle-outline',
};
export const Special: any = Template.bind({});
Special.args = {
  label: 'Neutral',
  theme: 'special',
  icon: 'happy',
  action: 'close-circle-outline',
};
export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Neutral',
  theme: 'danger',
  icon: 'happy',
  action: 'close-circle-outline',
};
export const Warning: any = Template.bind({});
Warning.args = {
  label: 'Neutral',
  theme: 'warning',
  icon: 'happy',
  action: 'close-circle-outline',
};
export const Success: any = Template.bind({});
Success.args = {
  label: 'Neutral',
  theme: 'success',
  icon: 'happy',
  action: 'close-circle-outline',
};
