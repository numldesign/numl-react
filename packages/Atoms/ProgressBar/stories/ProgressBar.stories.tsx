import React from 'react';
import * as El from '@numl-react/elements';
import ProgressBar from '../src/ProgressBar';

export default {
  title: 'Example/Atoms/ProgressBar',
  component: ProgressBar,
};

const Template = function ({ ...args }) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />
      <ProgressBar {...args} />
    </El.NumlProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: '50',
};
