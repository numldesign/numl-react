import React from 'react';

const RangeSlider2d = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-slider2d',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default RangeSlider2d;
