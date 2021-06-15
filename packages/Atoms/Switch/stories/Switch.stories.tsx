import { Switch } from '@numl-react/atoms';
import * as El from '@numl-react/elements';
import React from 'react';

export default {
  title: 'Numl React/Atoms/Switch',
  component: Switch,
};

const Template = ({ ...args }) => (
  <>
    <Switch {...args} />
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  label: <El.Label inline>This is my Label</El.Label>,
};
