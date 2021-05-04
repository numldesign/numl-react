import React from 'react';

const Grid = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

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
