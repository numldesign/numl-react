import React from 'react';
import Root from '../../../Elements/Root';
import { SettingToggle } from '../index';

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
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

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
