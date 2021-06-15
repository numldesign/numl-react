import React from 'react';
import ProgressBar from '../src/ProgressBar';

export default {
  title: 'Numl React/Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'none',
  },
};

const Template = function (args) {
  return <ProgressBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
