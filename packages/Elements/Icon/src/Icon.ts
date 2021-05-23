import React from 'react';

const Icon = React.forwardRef((props: any, ref) => {
  const { children, padding, ...otherProps } = props;

  otherProps.size = '1.25rem';
  otherProps.padding = padding || '0 0.25x';

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
