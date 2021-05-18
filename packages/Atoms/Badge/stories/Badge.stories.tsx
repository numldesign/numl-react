import React from 'react';
import { NumlProvider, ThemeProvider, Badge } from '@numl-react/core';

export default {
  title: 'Example/Atoms/Badge/Themes',
  component: Badge,
};

const DefaultTemplate = (props: any) => {
  const { ...otherProps } = props;
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />
      <Badge {...otherProps} />
    </NumlProvider>
  );
};

export const Neutral = DefaultTemplate.bind({});
Neutral.args = {
  label: 'Neutral',
};

export const Informational = DefaultTemplate.bind({});
Informational.args = {
  label: 'Informational',
  theme: 'special',
};

export const Success = DefaultTemplate.bind({});
Success.args = {
  label: 'Success',
  theme: 'success',
};

export const Warning = DefaultTemplate.bind({});
Warning.args = {
  label: 'Warning',
  theme: 'warning',
};

export const Danger = DefaultTemplate.bind({});
Danger.args = {
  label: 'Danger',
  theme: 'danger',
};
