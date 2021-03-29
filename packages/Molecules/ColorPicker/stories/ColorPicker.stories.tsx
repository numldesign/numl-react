import React from 'react';
import Root from '../../../Components/Root';
import ColorPicker from '../src/ColorPicker';

export default {
  title: 'Example/Molecules/ColorPicker',
  component: ColorPicker,
};

const Template = (args) => (
  <Root>
    <ColorPicker {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {};
