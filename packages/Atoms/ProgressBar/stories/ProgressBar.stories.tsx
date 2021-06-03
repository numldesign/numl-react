import React from 'react';
import * as El from '@numl-react/elements';
import ProgressBar from '../src/ProgressBar';

export default {
  title: 'Example/Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: '',
  },
};

const Template = function (args) {
  return <ProgressBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
