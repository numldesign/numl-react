import React from 'react';
import { NumlProvider, ThemeProvider, Icon, Link, FooterHelp } from '../../../entry';

export default {
  title: 'Example/Atoms/FooterHelp',
  component: FooterHelp,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg', undefined],
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    icon: {
      defaultValue: 'help-circle-outline',
      control: {
        type: 'text',
      },
    },
    link: {
      control: {
        type: 'text',
      },
    },
    linkLabel: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
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
  link: <Link to="https://numl.design" label="product" icon="help-circle-outline" />,
};
