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
  <El.NumlProvider padding="0">
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />

    <TopBar {...args} />
  </El.NumlProvider>
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
