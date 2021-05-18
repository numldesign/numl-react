import React from 'react';
import { NumlProvider, ThemeProvider, Icon } from '@numl-react/core';
import Link from '../src/Link';

export default {
  title: 'Example/Atoms/Link/Custom Icon',
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
  icon: <Icon name="exit-outline" text="top" padding="0 1px" />,
  theme: 'default',
};

export const Special = Template.bind({});
Special.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <Icon name="exit-outline" theme="special" text="top" padding="0 1px" />,
  theme: 'special',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <Icon name="exit-outline" theme="danger" text="top" padding="0 1px" />,
  theme: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <Icon name="exit-outline" theme="success" text="top" padding="0 1px" />,
  theme: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <Icon name="exit-outline" theme="warning" text="top" padding="0 1px" />,
  theme: 'warning',
};
