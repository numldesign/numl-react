import React from 'react';

const RangeSlider = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-slider',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default RangeSlider;
