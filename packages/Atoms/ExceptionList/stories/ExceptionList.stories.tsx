import React from 'react';

import * as El from '@numl-react/elements';
import ExceptionList from '../src/ExceptionList';

export default {
  title: 'Example/Atoms/ExceptionList/Basic',
  component: ExceptionList,
};

const Template = ({ title, label, icon, ...args }) => {
  const items = [
    { title, label, icon },
    { title, label, icon },
    { title, label, icon },
  ];
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />
      <ExceptionList items={items} {...args} />
    </El.NumlProvider>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Neutral',
  title: 'Title',
  type: '',
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Neutral',
  theme: 'danger',
  title: 'Title',
  type: '',
};

export const Warning: any = Template.bind({});
Warning.args = {
  label: 'Neutral',
  theme: 'warning',
  title: 'Title',
  type: '',
};
