import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { Icon } from '../../Icon';
import { Link } from '../../Link';
import { FooterHelp } from '../index';

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
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
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
  icon: <Icon name="help" />,
  link: <Link to="https://numl.design" label="product" icon="help-circle-outline" />,
};
