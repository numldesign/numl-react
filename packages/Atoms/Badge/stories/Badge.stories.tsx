import React from 'react';
import { NumlProvider, ThemeProvider, Badge } from '@numl-react/core';

export default {
  title: 'Example/Atoms/Badge',
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

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Neutral',
};

const WithIconTemplate = (props: any) => {
  const { label, icon, ...otherProps } = props;
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />
      <Badge {...otherProps} icon={icon}>
        <Badge.Label>{label}</Badge.Label>
      </Badge>
    </NumlProvider>
  );
};

export const WithIcon = WithIconTemplate.bind({});

WithIcon.args = {
  label: 'Informational',
  icon: <Badge.Icon name="alert-circle-outline" />,
};
