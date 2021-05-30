import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/elements';
import Tag from '../src/Tag';

export default {
  title: 'Example/Atoms/Tag',
  component: Tag,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Tag {...args} />
  </NumlProvider>
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
