import React from 'react';
import * as El from '@numl-react/elements';
import Radio from '../src/Radio';

export default {
  title: 'Example/Atoms/Radio',
  component: Radio,
};

const Template = ({ children, ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Radio {...args} />
  </El.NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Welcome to Numl.Design',
};
