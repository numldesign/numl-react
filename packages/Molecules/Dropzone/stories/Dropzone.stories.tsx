import React from 'react';
import * as El from '@numl-react/elements';
import Dropzone from '../src/Dropzone';

export default {
  title: 'Example/Molecules/Dropzone',
  component: Dropzone,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Dropzone {...args} content="center center" />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  content: 'center start',
  items: 'center center',
  fill: 'dark',
};
