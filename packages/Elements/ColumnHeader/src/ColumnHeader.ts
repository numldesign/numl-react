import React from 'react';

const ColumnHeader = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-columnheader',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default ColumnHeader;
