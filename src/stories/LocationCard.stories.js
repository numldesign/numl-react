import React from 'react';

import LocationCard from '../Molecules/LocationCard';
import Root from '../components/Root';

export default {
  title: 'Example/Molecules/LocationCard',
  component: LocationCard,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    address: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <LocationCard {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Hyderabad, Telangana',
  address: 'Gachibowli, Hyderabad, Telangana',
};
