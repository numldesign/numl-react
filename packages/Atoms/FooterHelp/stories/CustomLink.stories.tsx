import React from 'react';
import * as El from '@numl-react/elements';
import FooterHelp from '../src/FooterHelp';
import Link from '../../Link/src/Link';

export default {
  title: 'Example/Atoms/FooterHelp/Custom Link',
  component: FooterHelp,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <FooterHelp {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Learn more about',
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  linkLabel: 'product.',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  linkLabel: 'product.',
};
