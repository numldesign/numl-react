import React from 'react';

const ButtonGroup = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-btngroup',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default ButtonGroup;
