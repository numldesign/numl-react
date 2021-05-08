import React from 'react';

const GridTable = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-gridtable',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default GridTable;
