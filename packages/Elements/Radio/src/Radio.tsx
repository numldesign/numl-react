import React from 'react';

const Radio = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-radio',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Radio;
