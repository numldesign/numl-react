import React from 'react';

const RangeSlider = React.forwardRef((props: any, ref) => {
  const { width = '25', children, ...otherProps } = props;

  otherProps.width = width;

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
