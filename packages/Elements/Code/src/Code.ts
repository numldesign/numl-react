import React from 'react';

const Code = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-code',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Code;
