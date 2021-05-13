import React from 'react';
import { NumlProvider, ThemeProvider, SettingToggle } from '@numl-react/core';

export default {
  title: 'Example/Molecules/SettingToggle',
  component: SettingToggle,
  argTypes: {
    isActive: {
      control: {
        type: 'boolean',
      },
    },
  },
};
const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <SettingToggle {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  radius: '1x',
  border: '1bw',
  fill: 'bg',
  padding: '2x',
  content: 'space-between',
  flow: 'row wrap',
  text: 'This setting is',
  activeText: 'Enable',
  inactiveText: 'Disabled',
  isActive: true,
  onAction: (props) => console.log(props),
};
