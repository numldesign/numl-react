import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import ContextualSaveBar from '../src/ContextualSaveBar';

export default {
  title: 'Example/Organisms/ContextualSaveBar',
  component: ContextualSaveBar,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <NumlProvider padding="0">
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />

    <ContextualSaveBar {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  message: 'Unsaved Changes',
  buttonWidth: '6rem',
};
