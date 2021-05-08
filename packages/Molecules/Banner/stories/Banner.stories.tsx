import React from 'react';
import { Banner, Button, Icon, NumlProvider, ThemeProvider, El } from '@numl-react/core';

export default {
  title: 'Example/Molecules/Banner',
  component: Banner,
  argTypes: {
    prefix: {
      control: {
        type: 'text',
      },
    },
    heading: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <Banner {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Default Banner',
  footerActions: [
    <El.Grid gap="1" columns="auto auto">
      <Button key="1" gap="1" theme="danger">
        Close
      </Button>
      <Button key="2" gap="1">
        Save
      </Button>
    </El.Grid>,
  ],
  closeAction: (
    <Button
      padding="0"
      border="0"
      onClick={() => {
        console.log('close');
      }}
    >
      <Icon name="close" />
    </Button>
  ),
  prefix: <Icon name="information-circle-outline" />,
  children:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};
