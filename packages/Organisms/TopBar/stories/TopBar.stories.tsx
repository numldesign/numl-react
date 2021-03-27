import React from 'react';
import Root from '../../../Components/Root';
import TopBar from '../src/TopBar';

export default {
  title: 'Example/Organisms/TopBar',
  component: TopBar,
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
    <TopBar {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  header: 'ContextualSaveBar',
  children: [],
};
