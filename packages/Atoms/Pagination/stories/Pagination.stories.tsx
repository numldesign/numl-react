import React from 'react';
import * as El from '@numl-react/elements';
import Pagination from '../src/Pagination';
import Button from '../../Button/src/Button';

export default {
  title: 'Example/Atoms/Pagination',
  component: Pagination,
};

const Template = ({ flow, ...args }) => (
  <El.Flex gap flow={flow && flow == 'column' ? 'row' : 'column'}>
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
  previous: <Button icon="chevron-up-outline" />,
  next: <Button icon="chevron-down-outline" />,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  previous: <Button icon="chevron-back-outline" />,
  next: <Button icon="chevron-forward-outline" />,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  previous: 'chevron-back',
  next: 'chevron-forward',
};
