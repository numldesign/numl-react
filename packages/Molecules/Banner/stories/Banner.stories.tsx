import React from 'react';
import { Banner, Button, Icon, El } from '@numl-react/core';

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

const Template = ({ ...args }) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Default Banner',
  footerActions: [
    <El.Grid gap="1" columns="auto auto">
      <Button key="1" gap="1">
        Button
      </Button>
      <Button key="2" gap="1" theme={false} border="0">
        Button
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

export const Special: any = Template.bind({});
Special.args = {
  theme: 'special',
  heading: 'Default Banner',
  footerActions: [
    <El.Grid gap="1" columns="auto auto">
      <Button key="1" gap="1">
        Button
      </Button>
      <Button key="2" gap="1" theme={false} border="0">
        Button
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

export const Danger: any = Template.bind({});
Danger.args = {
  theme: 'danger',

  heading: 'Default Banner',
  footerActions: [
    <El.Grid gap="1" columns="auto auto">
      <Button key="1" gap="1">
        Button
      </Button>
      <Button key="2" gap="1" theme={false} border="0">
        Button
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

export const Warning: any = Template.bind({});
Warning.args = {
  theme: 'warning',

  heading: 'Default Banner',
  footerActions: [
    <El.Grid gap="1" columns="auto auto">
      <Button key="1" gap="1">
        Button
      </Button>
      <Button key="2" gap="1" theme={false} border="0">
        Button
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

export const Success: any = Template.bind({});
Success.args = {
  theme: 'success',
  heading: 'Default Banner',
  footerActions: [
    <El.Grid gap="1" columns="auto auto">
      <Button key="1" gap="1">
        Button
      </Button>
      <Button key="2" gap="1" theme={false} border="0">
        Button
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
