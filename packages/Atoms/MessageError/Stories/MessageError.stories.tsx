import React from 'react';
import Root from '../../../Components/Root';
import { THEMES } from '../../../helpers';
import { Icon } from '../../Icon';
import { MessageError } from '../index';

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
