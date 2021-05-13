import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import Thumbnail from '../src/Thumbnail';

export default {
  title: 'Example/Atoms/Thumbnail',
  component: Thumbnail,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Thumbnail {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
