import React from 'react';

const Svg = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-svg',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Svg;
