import React from 'react';

import { NumlProvider, ThemeProvider, El } from '@numl-react/core';
import ExceptionList from '../src/ExceptionList';

export default {
  title: 'Example/Atoms/ExceptionList/With Icons',
  component: ExceptionList,
};

const Template = ({ title, label, icon, ...args }) => {
  const items = [
    { title, label, icon },
    { title, label, icon },
    { title, label, icon },
  ];
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />
      <ExceptionList items={items} {...args} />
    </NumlProvider>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Neutral',
  title: 'Title',
  icon: <El.Icon padding="0" name="reader-outline" />,
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Neutral',
  theme: 'danger',
  title: 'Title',
  icon: <El.Icon padding="0" name="reader-outline" />,
};

export const Warning: any = Template.bind({});
Warning.args = {
  label: 'Neutral',
  theme: 'warning',
  title: 'Title',
  icon: <El.Icon padding="0" name="reader-outline" />,
};

export const Success: any = Template.bind({});
Success.args = {
  label: 'Neutral',
  theme: 'success',
  title: 'Title',
  icon: <El.Icon padding="0" name="reader-outline" />,
};
