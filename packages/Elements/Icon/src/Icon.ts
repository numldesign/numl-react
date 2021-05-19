import React from 'react';

const Icon = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  otherProps.size = '1.25rem';

  return React.createElement(
    'nu-icon',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Icon;
