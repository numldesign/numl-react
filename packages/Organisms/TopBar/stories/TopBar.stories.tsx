import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import TopBar from '../src/TopBar';

export default {
  title: 'Example/Organisms/TopBar',
  component: TopBar,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <NumlProvider padding="0">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <TopBar {...args} />
  </NumlProvider>
);

export const Default: any = Template.bind({});
Default.args = {
  placeholder: 'Text Field',
  nuLinkAction: 'https://www.google.com/',
  username: 'Syed Umer Hasan',
  menuIcon: 'menu-outline',
  children: [],
};
