import React from 'react';
import { NumlProvider, ThemeProvider, Badge } from '../../../entry';

export default {
  title: 'Example/Atoms/Badge',
  component: Badge,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    theme: {
      defaultValue: 'special',
      control: {
        type: 'select',
        options: ['bg', 'special', 'success', 'warning', 'danger'],
      },
    },
  },
};

const DefaultTemplate = function (props) {
  const { ...otherProps } = props;
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
      <Badge {...otherProps}></Badge>
    </NumlProvider>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Neutral',
};

const WithIconTemplate = function (props) {
  const { label, ...otherProps } = props;
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
      <Badge {...otherProps} icon={props.icon}>
        <Badge.Label>{props.label}</Badge.Label>
      </Badge>
    </NumlProvider>
  );
};

export const WithIcon = WithIconTemplate.bind({});

WithIcon.args = {
  label: 'Informational',
  icon: <Badge.Icon name="alert-circle-outline"></Badge.Icon>,
};
