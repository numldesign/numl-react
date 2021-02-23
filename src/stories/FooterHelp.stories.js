import React from 'react';
import Root from '../components/Root';
import FooterHelp from '../components/FooterHelp';
import Icon from '../components/Icon';
import Link from '../components/Link';

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
  <Root>
    <FooterHelp {...args} />
  </Root>
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
