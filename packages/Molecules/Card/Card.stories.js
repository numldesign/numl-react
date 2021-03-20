import React from 'react';
import Button from '../../Atoms/Button/Button';
import Root from '../../Components/Root';
import Card from './Card';

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
  <Root>
    <Card {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading',
  body: 'Body',
};

export const WithHeaderAction = Template.bind({});
WithHeaderAction.args = {
  heading: 'Heading',
  body: 'Body',
  headerActions: [
    <Button key="1" padding="0" radius="0" border="0" color="#special">
      Button
    </Button>,
  ],
};

export const WithBodyAction = Template.bind({});
WithBodyAction.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body: 'Body',
  bodyActions: [
    <Button key="1" padding="0" radius="0" border="0" color="#special">
      Button
    </Button>,
  ],
};

export const WithFooterActions = Template.bind({});
WithFooterActions.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body: 'Body',
  headerActions: [
    <Button key="1" padding="0" radius="0" border="0" color="#special">
      Button
    </Button>,
  ],
  footerActions: [
    <Button key="1">Button</Button>,
    <Button special key="2">
      Button
    </Button>,
  ],
};

export const SectionExample = Template.bind({});
SectionExample.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body: 'Body',
  headerActions: [
    <Button key="1" padding="0" radius="0" border="0" color="#special">
      Button
    </Button>,
  ],
  footerActions: [
    <Button key="1">Button</Button>,
    <Button special key="2">
      Button
    </Button>,
  ],
  children: [
    <Card
      key="one"
      radius="0"
      border="top"
      body="Body"
      subheading="Subheading"
      bodyActions={[
        <Button key="1" padding="0" radius="0" border="0" color="#special">
          Button
        </Button>,
      ]}
    />,
    <Card key="two" body="Body" radius="0" border="top" subheading="Subheading" />,
    <Card key="three" body="Body" radius="0" border="top" />,
  ],
};
