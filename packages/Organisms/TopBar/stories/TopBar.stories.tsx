import React from 'react';
import Root from '../../../Components/Root';
import TopBar from '../src/TopBar';

export default {
  title: 'Example/Organisms/TopBar',
  component: TopBar,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <Root padding="0">
    <TopBar {...args} />
  </Root>
);

export const Default: any = Template.bind({});
Default.args = {
  placeholder: 'Text Field',
  nuLinkAction: 'https://www.google.com/',
  username: 'Syed Umer Hasan',
  menuIcon: 'menu-outline',
  children: [],
};
