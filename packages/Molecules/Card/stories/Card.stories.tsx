import React from 'react';
import { Button } from '../../../Atoms/Button';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { Card } from '../index';

export default {
  title: 'Example/Molecules/Card',
  component: Card,
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
    },
    subheading: {
      control: {
        type: 'text',
      },
    },
    body: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <NumlProvider fill="black">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <Card {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading',
  body:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

export const WithHeaderAction = Template.bind({});
WithHeaderAction.args = {
  heading: 'Heading',
  body:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  headerActions: [<Button color="#special">Click Me</Button>],
};

export const WithBodyAction = Template.bind({});
WithBodyAction.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  bodyActions: [<Button color="#special">Click Me</Button>],
};

export const WithFooterActions = Template.bind({});
WithFooterActions.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  headerActions: [<Button color="#special">Click Me</Button>],
  footerActions: [<Button key="1">Button</Button>, <Button special>Click Me</Button>],
};

export const SectionExample = Template.bind({});
SectionExample.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  headerActions: [<Button color="#special">Click Me</Button>],
  footerActions: [<Button>Click Me</Button>, <Button special>Click Me</Button>],
  children: [
    <Card
      key="one"
      radius="0"
      border="top"
      body="Body"
      subheading="Subheading"
      bodyActions={[
        <Button key="1" padding="0" radius="0" border="0" color="#special">
          Click Me
        </Button>,
      ]}
    />,
    <Card key="two" body="Body" radius="0" border="top" subheading="Subheading" />,
    <Card key="three" body="Body" radius="0" border="top" />,
  ],
};
