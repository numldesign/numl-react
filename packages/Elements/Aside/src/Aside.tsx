import React from 'react';

const Aside = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-aside',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Aside;
