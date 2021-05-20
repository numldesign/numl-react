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

export const WithRadioGroup = Template.bind({});
WithRadioGroup.args = {
  heading: 'Reset Settings',
  children: (
    <Radio.Group
      padding="1x 0"
      border="top bottom"
      onChange={(props) => console.log('selected ', props)}
    >
      <Radio key="one" value="one">
        One
      </Radio>
      <Radio key="two" value="two">
        Two
      </Radio>
      <Radio key="three" value="Three">
        Three
      </Radio>
    </Radio.Group>
  ),
  actions: (
    <Button.Group flow="column">
      <Button key="Cancel" padding="0.5x 1x">
        Cancel
      </Button>
      <Button key="Ok" clear padding="0.5x 1x">
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
