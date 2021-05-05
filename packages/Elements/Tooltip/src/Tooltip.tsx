import React from 'react';

const Tooltip = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-tooltip',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Tooltip;
