import React from 'react';
import { NumlProvider, ThemeProvider, Icon, Link } from '@numl-react/elements';
import FooterHelp from '../src/FooterHelp';

export default {
  title: 'Example/Atoms/FooterHelp/Size',
  component: FooterHelp,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <FooterHelp {...args} />
  </NumlProvider>
);

export const Small = Template.bind({});
Small.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: 'https://www.google.com/',
  linkLabel: 'product.',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: 'https://www.google.com/',
  linkLabel: 'product.',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: 'https://www.google.com/',
  linkLabel: 'product.',
  size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: 'https://www.google.com/',
  linkLabel: 'product.',
  size: 'xl',
};
