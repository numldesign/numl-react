import React from 'react';
import { THEMES } from '../../helpers';
import Root from './../../Components/Root';
import Icon from './../Icon/Icon';
import MessageError from './MessageError';

export default {
  title: 'Example/Atoms/MessageError',
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
    icon: {
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
Basic.args = {
  icon: <Icon name="information-circle-outline"></Icon>,
};
