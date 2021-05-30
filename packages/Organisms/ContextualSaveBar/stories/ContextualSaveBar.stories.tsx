import React from 'react';
import * as El from '@numl-react/elements';
import ContextualSaveBar from '../src/ContextualSaveBar';

export default {
  title: 'Example/Organisms/ContextualSaveBar',
  component: ContextualSaveBar,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <El.NumlProvider padding="0">
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />

    <ContextualSaveBar {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  message: 'Unsaved Changes',
  buttonWidth: '6rem',
};
