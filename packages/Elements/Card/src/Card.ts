import React from 'react';

const Card = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-card',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Card;
