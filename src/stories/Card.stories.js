import React from 'react';

import Card from '../Molecules/Card';
import Button from '../Atoms/Button';
import Root from '../components/Root';

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
    <Button padding="0" radius="0" border="0" color="#special">
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
    <Button padding="0" radius="0" border="0" color="#special">
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
    <Button padding="0" radius="0" border="0" color="#special">
      Button
    </Button>,
  ],
  footerActions: [<Button>Button</Button>, <Button special>Button</Button>],
};

export const SectionExample = Template.bind({});
SectionExample.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body: 'Body',
  headerActions: [
    <Button padding="0" radius="0" border="0" color="#special">
      Button
    </Button>,
  ],
  footerActions: [<Button>Button</Button>, <Button special>Button</Button>],
  children: [
    <Card
      key="one"
      radius="0"
      border="top"
      body="Body"
      subheading="Subheading"
      bodyActions={[
        <Button padding="0" radius="0" border="0" color="#special">
          Button
        </Button>,
      ]}
    />,
    <Card key="two" body="Body" radius="0" border="top" subheading="Subheading" />,
    <Card key="three" body="Body" radius="0" border="top" />,
  ],
};
