import React from 'react';
import * as El from '@numl-react/elements';
import Pagination from '../src/Pagination';
import Button from '../../Button/src/Button';

export default {
  title: 'Example/Atoms/Pagination',
  component: Pagination,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Pagination {...args} />
  </El.NumlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  previous: 'chevron-back',
  next: 'chevron-forward',
};

export const Vertical = Template.bind({});
Vertical.args = {
  flow: 'column',
  previous: <Button icon="chevron-up-outline" />,
  next: <Button icon="chevron-down-outline" />,
};

const AttributeTemplate = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Pagination {...args} />
  </El.NumlProvider>
);

export const Horizontal = AttributeTemplate.bind({});
Horizontal.args = {
  previous: <Button icon="chevron-up-outline" />,
  next: <Button icon="chevron-down-outline" />,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  previous: 'chevron-back',
  next: 'chevron-forward',
};
