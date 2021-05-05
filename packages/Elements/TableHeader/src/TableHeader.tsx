import React from 'react';

const TableHeader = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-tableheader',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default TableHeader;
