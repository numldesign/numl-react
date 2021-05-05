import React from 'react';

const RowGroup = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-rowgroup',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default RowGroup;
