import React from 'react';
import { THEMES, themeToProps } from '../../../helpers';
import Root from '../../../Components/Root';
import Avatar from '../src/Avatar';

export default {
  title: 'Example/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: [...THEMES],
      },
    },
    showArrow: {
      defaultValue: true,
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
    {args.username || args.subtitle ? (
      <Avatar.Profile {...args} {...themeToProps(theme)}>
        <Avatar username={args.username} />
      </Avatar.Profile>
    ) : (
      <Avatar {...args} {...themeToProps(theme)} />
    )}
  </Root>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Font Size',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  username: 'Van Gough',
  subtitle: 'subtitle',
};
