import React from 'react';
import * as El from '@numl-react/elements';
import Chip from '../src/Chip';

export default {
  title: 'Example/Atoms/Chip/Types',
  component: Chip,
};

const Template = function ({ ...args }) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />
      <Chip {...args}></Chip>
    </El.NumlProvider>
  );
};

export const Normal: any = Template.bind({});
Normal.args = {
  label: 'Neutral',
};

export const Hover: any = Template.bind({});
Hover.args = {
  'is-hover': true,
  label: 'Neutral',
};

export const Pressed: any = Template.bind({});
Pressed.args = {
  'is-active': true,
  label: 'Neutral',
};

export const Toggled: any = Template.bind({});
Toggled.args = {
  'is-pressed': true,
  label: 'Neutral',
};

export const outline: any = Template.bind({});
outline.args = {
  outline: 'true',
  label: 'Neutral',
};

export const Disabled: any = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Neutral',
};
