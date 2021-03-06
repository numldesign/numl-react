import React from 'react';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Numl React/Atoms/Checkbox/With Label',
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
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'default',
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'danger',
};
