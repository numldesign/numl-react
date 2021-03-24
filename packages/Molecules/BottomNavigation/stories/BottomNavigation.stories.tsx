import React from 'react';
import { Icon } from '../../../Atoms/Icon';
import Root from '../../../Components/Root';
import { BottomNavigation } from '../index';

export default {
  title: 'Example/Molecules/BottomNavigation',
  component: BottomNavigation,
};

const Template = ({ ...args }) => (
  <Root>
    <BottomNavigation {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  height: 'min 6x',
  children: [
    <BottomNavigation.Item
      key="1"
      onClick={(e) => console.log('Home clicked ', e)}
    >
      Home
    </BottomNavigation.Item>,
    <BottomNavigation.Item
      key="2"
      onClick={(e) => console.log('Heart clicked ', e)}
    >
      Heart
    </BottomNavigation.Item>,
    <BottomNavigation.Item
      key="3"
      onClick={(e) => console.log('Profile clicked ', e)}
    >
      Profile
    </BottomNavigation.Item>,
    <BottomNavigation.Item
      key="4"
      onClick={(e) => console.log('Cart clicked ', e)}
    >
      Cart
    </BottomNavigation.Item>,
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  height: 'min 6x',
  children: [
    <BottomNavigation.Item
      key="1"
      onClick={(e) => console.log('Home clicked ', e)}
    >
      <Icon name="home-outline" />
    </BottomNavigation.Item>,
    <BottomNavigation.Item
      key="2"
      onClick={(e) => console.log('Heart clicked ', e)}
    >
      <Icon name="heart-outline" />
    </BottomNavigation.Item>,
    <BottomNavigation.Item
      key="3"
      onClick={(e) => console.log('Profile clicked ', e)}
    >
      <Icon name="person-outline" />
    </BottomNavigation.Item>,
    <BottomNavigation.Item
      key="4"
      onClick={(e) => console.log('Cart clicked ', e)}
    >
      <Icon name="cart-outline" />
    </BottomNavigation.Item>,
  ],
};
