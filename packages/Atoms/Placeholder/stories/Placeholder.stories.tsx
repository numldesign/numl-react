import React from 'react';
import * as El from '@numl-react/elements';
import Placeholder from '../src/Placeholder';
import Button from '../../Button/src/Button';

export default {
  title: 'Example/Atoms/Placeholder',
  component: Placeholder,
  parameters: {
    layout: 'none',
  },
};

const Template = ({ flow, ...args }) => (
  <El.Flex content="center" height="100vh" items="center">
    <El.Block width="80vw">
      <Placeholder {...args} />
    </El.Block>
  </El.Flex>
);

export const Basic = Template.bind({});
Basic.args = {};

const Template2 = ({ flow, ...args }) => (
  <El.Flex content="center" height="100vh" items="center">
    <El.Block width="80vw">
      <Placeholder.Card {...args} />
    </El.Block>
  </El.Flex>
);

export const Card = Template2.bind({});
Basic.args = {};
