import React from 'react';
import Root from '../../../Elements/Root';
import ContextualSaveBar from './../src/ContextualSaveBar';

export default {
  title: 'Example/Organisms/ContextualSaveBar',
  component: ContextualSaveBar,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <Root padding="0">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <ContextualSaveBar {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  message: 'Unsaved Changes',
  buttonWidth: '6rem',
};
