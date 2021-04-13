import React from 'react';
import Root from '../../../Elements/Root';
import Dropzone from '../src/Dropzone';

export default {
  title: 'Example/Molecules/Dropzone',
  component: Dropzone,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <Root>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <Dropzone {...args} content="center center"></Dropzone>
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  content: 'center start',
  items: 'center center',
  fill: 'dark',
};
