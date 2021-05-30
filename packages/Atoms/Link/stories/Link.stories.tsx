import React from 'react';
import { NumlProvider, ThemeProvider, Icon } from '@numl-react/elements';
import Link from '../../Link/src/Link';

export default {
  title: 'Example/Atoms/Link/Basic',
  component: Link,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Link {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
};

export const Special = Template.bind({});
Special.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  theme: 'special',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  theme: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  theme: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  theme: 'warning',
};
