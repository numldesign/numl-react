import React from 'react';
import Root from '../../../Components/Root';
import Dropzone from '../src/Dropzone';

export default {
  title: 'Example/Molecules/Dropzone',
  component: Dropzone,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <Root>
    <Dropzone {...args} content="center center"></Dropzone>
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  content: 'center start',
  items: 'center center',
  fill: 'dark',
};
