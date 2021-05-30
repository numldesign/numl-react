import React from 'react';
import { NumlProvider, ThemeProvider, Icon, Link } from '@numl-react/elements';
import FooterHelp from '../src/FooterHelp';

export default {
  title: 'Example/Atoms/FooterHelp/Basic',
  component: FooterHelp,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <FooterHelp {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Learn more about',
  link: 'https://www.google.com/',
  linkLabel: 'product.',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: 'https://www.google.com/',
  linkLabel: 'product.',
};
