import React from 'react';
import { El, Button, El } from '@numl-react/core';
import Sheet from '../src/Sheet';

export default {
  title: 'Example/Molecules/Sheet',
  component: Sheet,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Sheet {...args} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
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
  closeAction: () => {
    console.log('Close clicked');
  },
};
