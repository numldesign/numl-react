import React from 'react';
import * as El from '@numl-react/elements';
import PageAction from '../src/PageAction';

export default {
  title: 'Example/Molecules/PageAction',
  component: PageAction,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <PageAction {...args} />
  </El.NumlProvider>
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
