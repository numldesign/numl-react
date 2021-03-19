import React from 'react';

import Root from './../Components/Root';
import SettingToggle from '../Molecules/SettingToggle';

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
  <Root>
    <SettingToggle {...args} />
  </Root>
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
