import React from 'react';

const CardButton = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-cardbtn',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default CardButton;
