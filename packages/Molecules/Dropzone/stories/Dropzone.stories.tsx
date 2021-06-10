import React from 'react';
import Dropzone from '../src/Dropzone';

export default {
  title: 'Numl React/Molecules/Dropzone',
  component: Dropzone,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <>
    <Dropzone {...args} content="center center" />
  </>
);

export const Default = Template.bind({});
Default.args = {
  content: 'center start',
  items: 'center center',
  fill: 'dark',
};
