import * as El from '@numl-react/elements';
import React from 'react';
import Avatar from '../../../Atoms/Avatar/src/Avatar';
import Button from '../../../Atoms/Button/src/Button';
import DialogueBox from '../src/DialogueBox';

export default {
  title: 'Numl React/Molecules/DialogueBox',
  component: DialogueBox,
};

const Template = ({ ...args }) => (
  <>
    <DialogueBox {...args} />
  </>
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
