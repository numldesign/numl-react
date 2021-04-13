import React from 'react';
import Root from '../../../Elements/Root';
import ColorPicker from '../src/ColorPicker';

export default {
  title: 'Example/Molecules/ColorPicker',
  component: ColorPicker,
};

const Template = (args) => (
  <Root>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <ColorPicker {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {};
