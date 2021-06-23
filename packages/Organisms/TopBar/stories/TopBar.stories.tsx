import * as El from '@numl-react/elements';
import React from 'react';
import { TopBar } from '../src/TopBar';

export default {
  title: 'Numl React/Organisms/TopBar',
  component: TopBar,
  parameters: {
    layout: 'none',
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
