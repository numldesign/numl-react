import React from 'react';
import Root from '../components/Root';
import MessageError from '../components/MessageError';

import { THEMES } from '../helpers';

export default {
  title: 'Example/MessageError',
  component: MessageError,
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
    message: {
      defaultValue: 'This is not valid',
      control: {
        type: 'text',
      },
    },
    iconName: {
      defaultValue: 'alert-circle-outline',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <MessageError {...args} />
  </Root>
);

export const Basic = Template.bind({});
