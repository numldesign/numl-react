import React from 'react';
import {
  NumlProvider,
  Radio,
  Button,
  Avatar,
  ThemeProvider,
} from '../../../Core';
import DialogueBox from '../src/DialogueBox';

export default {
  title: 'Example/Molecules/DialogueBox',
  component: DialogueBox,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />

    <DialogueBox {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Reset Settings',
  children: 'This will reset your device to its default factor settings',
  actions: (
    <Button.Group width="10" flex gap="2x">
      <Button radius="1r">Cancel</Button>
      <Button radius="1r" theme="special">
        Ok
      </Button>
    </Button.Group>
  ),
};

export const WithAvatarList = Template.bind({});
WithAvatarList.args = {
  heading: 'Set Backup Account',
  children: [
    <Avatar.Profile username="Van Gogh" />,
    <Avatar.Profile username="Van Gogh" />,
    <Avatar.Profile username="Van Gogh" />,
  ],
  actions: [
    <Button key="Ok" clear>
      Ok
    </Button>,
    <Button key="Ok" clear>
      Ok
    </Button>,
  ],
};
