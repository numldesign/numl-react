import { ColorPicker } from '@numl-react/core';
import React from 'react';

export default {
  title: 'Numl React/Molecules/ColorPicker',
  component: ColorPicker,
};

const Template = (args) => (
  <>
    <ColorPicker {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
