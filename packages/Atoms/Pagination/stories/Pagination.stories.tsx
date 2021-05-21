import React from 'react';
import { NumlProvider, ThemeProvider, Icon, Button } from '@numl-react/core';
import Pagination from '../src/Pagination';

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
Basic.args = {
  previous: 'chevron-back',
  next: 'chevron-forward',
};

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
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
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

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  previous: 'chevron-back',
  next: 'chevron-forward',
};
