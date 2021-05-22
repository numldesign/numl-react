import React from 'react';

const Icon = React.forwardRef((props: any, ref) => {
  const { children, padding, ...otherProps } = props;

  otherProps.size = '1.25rem';
  otherProps.padding = padding || '0 1x';

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
