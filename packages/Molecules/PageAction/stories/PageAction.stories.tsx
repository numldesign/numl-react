import React from 'react';
import Root from '../../../Components/Root';
import PageAction from '../src/PageAction';

export default {
  title: 'Example/Molecules/PageAction',
  component: PageAction,
};

const Template = ({ ...args }) => (
  <Root>
    <PageAction {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  primaryAction: {
    content: 'Save',
    onTap: () => console.log('click Save'),
  },
  secondaryActions: [
    {
      content: 'Delete',
      destructive: true,
      onTap: () => console.log('click Delete'),
    },
  ],
};

export const WithExtraActions = Template.bind({});
WithExtraActions.args = {
  primaryAction: {
    content: 'Save',
    onTap: () => console.log('click Save'),
  },
  secondaryActions: [
    {
      content: 'More',
      onTap: () => console.log('click More'),
    },
    {
      content: 'Delete',
      destructive: true,
      onTap: () => console.log('click Delete'),
    },
  ],
};
