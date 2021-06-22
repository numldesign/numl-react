import { ColumnsUtility } from '@numl-react/utility';
import React from 'react';

const Grid = React.forwardRef((props: any, ref) => {
  const {
    columns = '',
    xs = '',
    sm = '',
    md = '',
    lg = '',
    xl = '',
    children,
    ...otherProps
  } = props;

  if (!(xs == '' && sm == '' && md == '' && lg == '' && xl == '')) {
    const { column } = ColumnsUtility({
      xs,
      sm,
      md,
      lg,
      xl,
    });

    otherProps.columns = column;
  }

  return React.createElement(
    'nu-grid',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Grid;
