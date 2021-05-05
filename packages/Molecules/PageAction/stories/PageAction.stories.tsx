import React from 'react';
import { NumlProvider, ThemeProvider, PageAction } from '../../../Core';

export default {
  title: 'Example/Molecules/PageAction',
  component: PageAction,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <PageAction {...args} />
  </NumlProvider>
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
