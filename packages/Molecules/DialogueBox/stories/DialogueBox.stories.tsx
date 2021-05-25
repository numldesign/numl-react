import React from 'react';
import { El, NumlProvider, ThemeProvider } from '../../../Core';
import DialogueBox from '../src/DialogueBox';
import Avatar from '../../../Atoms/Avatar/src/Avatar';
import Button from '../../../Atoms/Button/src/Button';

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
  footerActions: [
    <Button.Group>
      <Button>Cancel</Button>
      <Button special>Submit</Button>
    </Button.Group>,
  ],
};

export const WithAvatarList = Template.bind({});
WithAvatarList.args = {
  heading: 'Set Backup Account',
  children: [
    <El.Block>
      <Avatar.Profile username="Van Gogh" subtitle="Hellow World!" />
      <Avatar.Profile username="Van Gogh" subtitle="Hellow World!" />
      <Avatar.Profile username="Van Gogh" subtitle="Hellow World!" />
    </El.Block>,
  ],
  footerActions: [
    <Button.Group>
      <Button>Cancel</Button>
      <Button key="Ok" clear theme="special">
        Submit
      </Button>
    </Button.Group>,
  ],
};
