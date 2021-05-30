import React from 'react';
import * as El from '@numl-react/elements';
import Thumbnail from '../src/Thumbnail';

export default {
  title: 'Example/Atoms/Thumbnail',
  component: Thumbnail,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Thumbnail {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  source:
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
};
