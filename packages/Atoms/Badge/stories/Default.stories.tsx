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

export const Neutral = DefaultTemplate.bind({});
Neutral.args = {
  label: 'default',
};
