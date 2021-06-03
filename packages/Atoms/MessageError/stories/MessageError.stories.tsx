import React from 'react';
import * as El from '@numl-react/elements';
import MessageError from '../src/MessageError';

export default {
  title: 'Example/Atoms/MessageError',
  component: MessageError,
};

const Template = ({ children, ...args }) => (
  <>
    <MessageError {...args}>{children}</MessageError>
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'This is not valid',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'information-circle-outline',
  children: 'This is okay',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: <El.Icon name="information-circle-outline" />,
  children: 'This is default message',
};
