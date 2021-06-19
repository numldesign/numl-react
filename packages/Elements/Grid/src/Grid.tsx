/* eslint-disable no-param-reassign */
import { ColumnsUtility } from '@numl-react/utility';
import React from 'react';

const Grid = React.forwardRef((props: any, ref) => {
  const {
    xs = '',
    sm = '',
    md = '',
    lg = '',
    xl = '',
    children,
    ...otherProps
  } = props;

  const { columns } = ColumnsUtility({
    xs,
    sm,
    md,
    lg,
    xl,
  });
  otherProps.columns = columns;
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
