import React from 'react';
import { Button } from '../../Atoms/Button';
import Root from '../../Components/Root';
import Tooltip from './Tooltip';

export default {
  title: 'Example/Molecules/Tooltip',
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
  <Root padding="6x 2x">
    <Button>
      Hover me
      <Tooltip {...args} />
    </Button>
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  padding: '1x',
  size: 'md',
  place: 'outside-right',
  description: 'This order has shipping labels.',
};
