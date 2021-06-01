import React from 'react';
import * as El from '@numl-react/elements';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Example/Atoms/Checkbox/Themes',
  component: Checkbox,
};

const Template = ({ children, ...args }) => (
  <>
    <Checkbox {...args} />
    <Checkbox checked {...args} />
    <Checkbox disabled {...args} />
    <Checkbox checked disabled {...args} />
  </>
);

export const Default: any = Template.bind({});
Default.args = {
  label: 'Hello World!',
  theme: 'default',
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Hello World!',
  theme: 'danger',
};
