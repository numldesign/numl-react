import React from 'react';

const Table = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-table',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Table;
