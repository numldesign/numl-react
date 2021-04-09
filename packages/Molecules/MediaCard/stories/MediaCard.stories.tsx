import React from 'react';
import Root from '../../../Components/Root';
import { MediaCard } from '../index';
import { Button } from './../../../Atoms/Button/';

export default {
  title: 'Example/Molecules/MediaCard',
  component: MediaCard,
};

const Template = ({ ...args }) => (
  <Root>
    <MediaCard {...args}></MediaCard>
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  src:
    'https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg',
  heading: 'New product and the market',
  description: 'Product details',
  action: <Button> Learn More </Button>,
};
