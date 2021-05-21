import React from 'react';
import {
  NumlProvider,
  ThemeProvider,
  Icon,
  Pagination,
  Button,
} from '@numl-react/core';

export default {
  title: 'Example/Atoms/Pagination',
  component: Pagination,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Pagination {...args} />
  </NumlProvider>
);

export const Basic = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  flow: 'column',
  previous: (
    <Button>
      <Icon name="chevron-up-outline" />
    </Button>
  ),
  next: (
    <Button>
      <Icon name="chevron-down-outline" />
    </Button>
  ),
};

const AttributeTemplate = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Pagination {...args} />
  </NumlProvider>
);

export const Horizontal = AttributeTemplate.bind({});
Horizontal.args = {
  previous: (
    <Button>
      <Icon name="chevron-back-outline" />
    </Button>
  ),
  next: (
    <Button>
      <Icon name="chevron-forward-outline" />
    </Button>
  ),
};
