import React from 'react';

const RowHeader = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-rowheader',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default RowHeader;
