import { El, Tooltip } from '@numl-react/core';
import React from 'react';

export default {
  title: 'Numl React/Molecules/Tooltip',
  component: Tooltip,
  argTypes: {
    username: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <>
    <El.Button>
      Hover me
      <Tooltip {...args} />
    </El.Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  padding: '1x',
  size: 'md',
  place: 'outside-right',
  description: 'This order has shipping labels.',
};
