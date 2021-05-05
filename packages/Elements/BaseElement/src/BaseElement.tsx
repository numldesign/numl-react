import React from 'react';

const BaseElement = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-el',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default BaseElement;
