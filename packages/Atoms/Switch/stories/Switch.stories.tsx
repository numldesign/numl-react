import React from 'react';
import * as El from '@numl-react/elements';
import { Switch } from '../index';

export default {
  title: 'Example/Atoms/Switch',
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
