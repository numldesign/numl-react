import React, { useCallback, useState } from 'react';
import * as El from '@numl-react/elements';
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
    <>
      <SettingToggle onTap={toggle} isActive={value} {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: 'This setting is',
  activeText: 'Enable',
  inactiveText: 'Disabled',
};
