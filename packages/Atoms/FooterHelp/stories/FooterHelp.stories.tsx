import React from 'react';
import { NumlProvider, ThemeProvider, Icon } from '@numl-react/core';
import FooterHelp from '../src/FooterHelp';
import Link from '../../Link/src/Link';

export default {
  title: 'Example/Atoms/FooterHelp/Custom Link',
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
  icon: 'help-circle-outline',
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  theme: 'default',
};

export const Special = Template.bind({});
Special.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  theme: 'special',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  theme: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  theme: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  theme: 'warning',
};
