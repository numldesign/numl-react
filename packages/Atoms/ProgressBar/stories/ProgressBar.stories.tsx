import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import { ProgressBar } from '../index';

export default {
  title: 'Example/Atoms/ProgressBar',
  component: ProgressBar,
};

const Template = function ({ ...args }) {
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />
      <ProgressBar {...args} />
    </NumlProvider>
  );
};

export const Default = Template.bind({});
