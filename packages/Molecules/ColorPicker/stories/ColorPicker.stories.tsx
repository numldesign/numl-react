import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import ColorPicker from '../src/ColorPicker';

export default {
  title: 'Example/Molecules/ColorPicker',
  component: ColorPicker,
};

const Template = (args) => (
  <NumlProvider>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <ColorPicker {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {};
