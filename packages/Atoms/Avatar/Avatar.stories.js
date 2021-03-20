import React from 'react';

import Root from './../../Components/Root';
import { THEMES, themeToProps } from '../../helpers';
import Avatar from './Avatar';

export default {
  title: 'Example/Atoms/Avatar',
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
    username: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ theme, ...args }) => (
  <Root>
    {args.username && args.subtitle ? (
      <Avatar.Profile {...args} {...themeToProps(theme)}>
        <Avatar username={args.username} />
      </Avatar.Profile>
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
