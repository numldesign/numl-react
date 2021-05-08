import React from 'react';

const Badge = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-badge',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Badge;
