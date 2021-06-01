import React from 'react';
import { El, ColorPicker } from '@numl-react/core';

export default {
  title: 'Example/Molecules/ColorPicker',
  component: ColorPicker,
};

const Template = (args) => (
  <>
    <ColorPicker {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
