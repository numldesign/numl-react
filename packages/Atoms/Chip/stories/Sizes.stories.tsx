import React from 'react';
import { Icon, NumlProvider, ThemeProvider } from '@numl-react/elements';
import Chip from '../src/Chip';

export default {
  title: 'Example/Atoms/Chip/Sizes',
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

export const Small: any = Template.bind({});
Small.args = {
  label: 'Neutral',
  size: 'sm',
};

export const Medium: any = Template.bind({});
Medium.args = {
  label: 'Neutral',
  size: 'md',
};

export const Large: any = Template.bind({});
Large.args = {
  label: 'Neutral',
  size: 'lg',
};

export const ExtraLarge: any = Template.bind({});
ExtraLarge.args = {
  label: 'Neutral',
  size: 'xl',
};
