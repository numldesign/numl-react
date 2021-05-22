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

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  previous: 'chevron-back',
  next: 'chevron-forward',
};
