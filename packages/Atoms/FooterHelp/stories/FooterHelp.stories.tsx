import React from 'react';
import {
  NumlProvider,
  ThemeProvider,
  Icon,
  Link,
  FooterHelp,
} from '@numl-react/core';

export default {
  title: 'Example/Atoms/FooterHelp',
  component: FooterHelp,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <FooterHelp {...args} />
  </NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: 'https://numl.design',
  linkLabel: 'product.',
};

export const WithCustom = Template.bind({});
WithCustom.args = {
  label: 'Learn more about',
  icon: <Icon color="special" name="help" />,
  link: (
    <Link to="https://numl.design" label="product" icon="help-circle-outline" />
  ),
};
