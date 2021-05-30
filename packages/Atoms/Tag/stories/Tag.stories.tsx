import React from 'react';
import * as El from '@numl-react/elements';
import Tag from '../src/Tag';

export default {
  title: 'Example/Atoms/Tag',
  component: Tag,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Tag {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  deletable: true,
  label: 'Informational',
};
