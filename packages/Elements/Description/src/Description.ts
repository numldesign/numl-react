import React from 'react';

const Description = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-description',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Description;
