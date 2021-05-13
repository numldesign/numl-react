import React from 'react';
import { NumlProvider, ThemeProvider, Icon, Link } from '@numl-react/core';

export default {
  title: 'Example/Atoms/Link',
  component: Link,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Link {...args} />
  </NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  to: 'https://numl.design',
  label: 'fulfulling orders',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  to: 'https://numl.design',
  label: 'Foneu Help Center',
  icon: <Icon name="exit-outline" text="top" padding="0 1px" />,
};
