import React from 'react';

const PropsProvider = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-props',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default PropsProvider;
