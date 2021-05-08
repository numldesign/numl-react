import React from 'react';

const Cell = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-cell',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Cell;
