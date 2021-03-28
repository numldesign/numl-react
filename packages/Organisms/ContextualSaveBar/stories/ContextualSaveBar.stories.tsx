import React from 'react';
import Root from '../../../Components/Root';
import ContextualSaveBar from './../src/ContextualSaveBar';

export default {
  title: 'Example/Organisms/ContextualSaveBar',
  component: ContextualSaveBar,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <Root padding="0">
    <ContextualSaveBar {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  message: 'Unsaved Changes',
  buttonWidth: '6rem',
};
