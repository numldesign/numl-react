import React from 'react';
import { NumlProvider, ThemeProvider, ColorPicker } from '../../../entry';

export default {
  title: 'Example/Molecules/ColorPicker',
  component: ColorPicker,
};

const Template = (args) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <ColorPicker {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {};
