import React from 'react';
import { NumlProvider, El, ThemeProvider, Icon, Button, EmptyState } from '../../../entry';

export default {
  title: 'Example/Molecules/EmptyState',
  component: EmptyState,
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
    },
    description: {
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
    <EmptyState {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  border: '1bw',
  fill: 'bg',
  padding: '2x',
  height: 'min 40x',
  content: 'center',
  heading: 'You need permission to view this page',
  description: 'Email the account owner to get access to this page.',
  actions: [
    <Button key="1" theme="special">
      Request Access
    </Button>,
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  border: '1bw',
  fill: 'bg',
  padding: '2x',
  height: 'min 40x',
  content: 'center',
  heading: 'You need permission to view this page',
  description: 'Email the account owner to get access to this page.',
  actions: [
    <Button key="1" theme="special">
      Request Access
    </Button>,
  ],
  children: <Icon name="search" size="5x" />,
};

export const WithImage = Template.bind({});
WithImage.args = {
  border: '1bw',
  fill: 'bg',
  padding: '2x',
  height: 'min 50x',
  content: 'center',
  heading: 'You need permission to view this page',
  description: 'Email the account owner to get access to this page.',
  actions: [
    <Button key="1">
      <Icon name="swap-vertical-outline" /> Import products
    </Button>,
    <Button key="2" theme="special">
      Request Access
    </Button>,
  ],
  children: (
    <El.Image
      src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
      fit="fill"
      width="14x"
      height="14x"
    ></El.Image>
  ),
};
