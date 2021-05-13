import React from 'react';
import { NumlProvider, ThemeProvider, Dropzone } from '@numl-react/core';

export default {
  title: 'Example/Molecules/Dropzone',
  component: Dropzone,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Dropzone {...args} content="center center" />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  content: 'center start',
  items: 'center center',
  fill: 'dark',
};
