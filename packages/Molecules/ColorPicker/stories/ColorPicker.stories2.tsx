import React from 'react';
import { El, ColorPicker } from '@numl-react/core';

export default {
  title: 'Example/Molecules/ColorPicker',
  component: ColorPicker,
};

const Template = (args) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <ColorPicker {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {};
