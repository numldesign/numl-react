import React, { useCallback, useState } from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/core';
import SettingToggle from '../src/SettingToggle';

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

const Template = ({ ...args }) => {
  const [value, setValue] = React.useState(false);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);

  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />

      <SettingToggle onTap={toggle} isActive={value} {...args} />
    </NumlProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: 'This setting is',
  activeText: 'Enable',
  inactiveText: 'Disabled',
};
