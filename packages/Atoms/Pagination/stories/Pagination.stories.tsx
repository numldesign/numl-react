import React from 'react';
import { NumlProvider, ThemeProvider, Icon, Pagination, Button } from '../../../Core';

export default {
  title: 'Example/Atoms/Pagination',
  component: Pagination,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    label: {
      defaultValue: 'result',
      control: {
        type: 'text',
      },
    },
    previous: {
      defaultValue: 'chevron-back',
      control: {
        type: 'text',
      },
    },
    next: {
      defaultValue: 'chevron-forward',
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
    <Pagination {...args} />
  </NumlProvider>
);

export const Basic = Template.bind({});

export const Horizontal = Template.bind({});
Horizontal.args = {
  flow: 'column',
  previous: (
    <Button>
      <Icon name="chevron-up" />
    </Button>
  ),
  next: (
    <Button>
      <Icon name="chevron-down" />
    </Button>
  ),
};

const AttributeTemplate = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <Pagination {...args} />
  </NumlProvider>
);

export const WithCustomIcon = AttributeTemplate.bind({});
WithCustomIcon.args = {
  previous: (
    <Button>
      <Icon name="hand-left-outline" />
    </Button>
  ),
  next: (
    <Button>
      <Icon name="hand-left-outline" />
    </Button>
  ),
};
