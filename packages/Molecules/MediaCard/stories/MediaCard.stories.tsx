import React from 'react';
import { NumlProvider, ThemeProvider, MediaCard, Button } from '@numl-react/core';

export default {
  title: 'Example/Molecules/MediaCard',
  component: MediaCard,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <MediaCard {...args}></MediaCard>
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg',
  heading: 'New product and the market',
  description: 'Product details',
  action: <Button> Learn More </Button>,
};
