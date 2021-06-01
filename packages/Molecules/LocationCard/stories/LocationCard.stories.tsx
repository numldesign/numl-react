import React from 'react';
import * as El from '@numl-react/elements';
import LocationCard from '../src/LocationCard';

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
  <>
    <LocationCard {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Hyderabad, Telangana',
  address: 'Gachibowli, Hyderabad, Telangana',
};
