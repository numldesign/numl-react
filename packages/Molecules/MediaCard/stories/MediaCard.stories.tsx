import React from 'react';
import Button from '../../../Atoms/Button/src/Button';
import MediaCard from '../../MediaCard/src/MediaCard';

export default {
  title: 'Numl React/Molecules/MediaCard',
  component: MediaCard,
};

const Template = ({ ...args }) => (
  <>
    <MediaCard {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
  heading: 'New product and the market',
  description: 'Product details',
  menu: (
    <>
      <Button.Item to="https://www.google.com">Details</Button.Item>
      <Button.Item>Close</Button.Item>
    </>
  ),
  action: <Button> Learn More </Button>,
};
