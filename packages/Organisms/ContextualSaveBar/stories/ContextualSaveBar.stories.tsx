import React from 'react';
import Root from '../../../Components/Root';
import ContextualSaveBar from './../src/ContextualSaveBar';

export default {
  title: 'Example/Organisms/ContextualSaveBar',
  component: ContextualSaveBar,
  argTypes: {
    header: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <ContextualSaveBar {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  header: 'ContextualSaveBar',
  children: [],
};
