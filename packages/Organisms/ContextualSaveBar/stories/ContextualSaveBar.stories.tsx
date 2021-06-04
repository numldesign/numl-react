import React from 'react';
import * as El from '@numl-react/elements';
import ContextualSaveBar from '../src/ContextualSaveBar';
import Button from '../../../Atoms/Button/src/Button';

export default {
  title: 'Example/Organisms/ContextualSaveBar',
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
