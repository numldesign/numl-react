import React from 'react';
import { ContextualSaveBar } from '../src/ContextualSaveBar';
import { Button } from '@numl-react/atoms';

export default {
  title: 'Numl React/Organisms/ContextualSaveBar',
  component: ContextualSaveBar,
  parameters: {
    layout: 'none',
  },
};

const Template = ({ ...args }) => (
  <>
    <ContextualSaveBar {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  message: 'Unsaved Changes',
  button: (
    <>
      <Button.Small>Discard</Button.Small>
      <Button.Small theme="special">Save</Button.Small>
    </>
  ),
};
