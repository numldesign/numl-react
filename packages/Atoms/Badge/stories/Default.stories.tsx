import React from 'react';
import * as El from '@numl-react/elements';
import Badge from '../src/Badge';

export default {
  title: 'Example/Atoms/Badge',
  component: Badge,
};

const DefaultTemplate = (props: any) => {
  const { ...otherProps } = props;
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />
      <Badge {...otherProps} />
    </El.NumlProvider>
  );
};

export const Basic = DefaultTemplate.bind({});
Basic.args = {
  label: 'default',
};
