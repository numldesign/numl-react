import React from 'react';
import * as El from '@numl-react/elements';
import Link from '../src/Link';

export default {
  title: 'Example/Atoms/Link/Custom Icon',
  component: Link,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Link {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <El.Icon name="exit-outline" text="top" />,
  theme: 'default',
};

export const Special = Template.bind({});
Special.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <El.Icon name="exit-outline" theme="special" text="top" />,
  theme: 'special',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <El.Icon name="exit-outline" theme="danger" text="top" />,
  theme: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <El.Icon name="exit-outline" theme="success" text="top" />,
  theme: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <El.Icon name="exit-outline" theme="warning" text="top" />,
  theme: 'warning',
};
