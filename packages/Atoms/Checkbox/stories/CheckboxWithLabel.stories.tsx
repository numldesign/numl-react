import React from 'react';
import { NumlProvider, ThemeProvider } from '@numl-react/elements';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Example/Atoms/Checkbox/With Label',
  component: Checkbox,
};

const Template = ({ children, ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Checkbox {...args} />
    <Checkbox checked {...args} />
    <Checkbox disabled {...args} />
    <Checkbox checked disabled {...args} />
  </NumlProvider>
);

export const Default: any = Template.bind({});
Default.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'default',
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: <Checkbox.Label> Hello World! </Checkbox.Label>,
  theme: 'danger',
};
