import React from 'react';
import {
  NumlProvider,
  ThemeProvider,
  Button,
  Sheet,
  El,
} from '@numl-react/core';

export default {
  title: 'Example/Molecules/Sheet',
  component: Sheet,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Sheet {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  fill: 'bg',
  border: '1bw',
  contentHeight: 'min 50x',
  choices: [
    { label: 'Online Store', value: 'online_store' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Google shopping', value: 'google_shopping' },
    { label: 'Facebook Marketing', value: 'facebook_marketing' },
  ],
  onChange: (props) => console.log(props),
  heading: (
    <El.Block size="xl" color="#text-soft">
      Manage sales channels
    </El.Block>
  ),
  footerActions: [
    <El.Button key="1">Cancel</El.Button>,
    <El.Button key="2" special>
      Done
    </El.Button>,
  ],
  closeAction: (
    <Button>
      <Button.Icon name="close"></Button.Icon>
    </Button>
  ),
};
