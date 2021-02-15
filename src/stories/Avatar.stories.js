import React from 'react';
import Root from '../components/Root';
import Avatar from '../components/Avatar';
import { THEMES, themeToProps } from '../helpers';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    theme: {
      defaultValue: undefined,
      control: {
        type: 'select',
        options: [undefined, ...THEMES],
      },
    },
    showArrow: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ theme, ...args }) => (
  <Root>
    {args.username || args.subtitle ? (
      <Avatar.Profile {...args} {...themeToProps(theme)} />
    ) : (
      <Avatar {...args} {...themeToProps(theme)} />
    )}
  </Root>
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
};
