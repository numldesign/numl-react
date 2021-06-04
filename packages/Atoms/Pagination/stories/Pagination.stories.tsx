import React from 'react';
import * as El from '@numl-react/elements';
import Pagination from '../src/Pagination';
import Button from '../../Button/src/Button';

export default {
  title: 'Example/Atoms/Pagination',
  component: Pagination,
};

const Template = ({ flow, ...args }) => (
  <El.Flex
    gap
    flow={flow && flow == 'column' ? 'row' : 'column'}
    items="center"
    content="center"
  >
    <Pagination flow={flow} type="small" {...args} />
    <Pagination flow={flow} type="medium" {...args} />
    <Pagination flow={flow} type="large" {...args} />
    <Pagination flow={flow} type="extralarge" {...args} />
  </El.Flex>
);

export const Basic = Template.bind({});
Basic.args = {
  previous: 'chevron-back',
  next: 'chevron-forward',
};

export const Vertical = Template.bind({});
Vertical.args = {
  flow: 'column',
  previous: 'chevron-up-outline',
  next: 'chevron-down-outline',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  previous: 'chevron-back',
  next: 'chevron-forward',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  previous: 'chevron-back',
  next: 'chevron-forward',
};
