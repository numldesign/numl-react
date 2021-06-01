import React from 'react';
import * as El from '@numl-react/elements';
import TopBar from '../src/TopBar';

export default {
  title: 'Example/Organisms/TopBar',
  component: TopBar,
  parameters: {
    layout: '',
  },
};

const Template = ({ ...args }) => (
  <>
    <TopBar {...args} />
  </>
);

export const Default: any = Template.bind({});
Default.args = {
  placeholder: 'Text Field',
  nuLinkAction: 'https://www.google.com/',
  username: 'Syed Umer Hasan',
  menuIcon: 'menu-outline',
  children: [],
  menu: <El.Block>Hello World!</El.Block>,
};
