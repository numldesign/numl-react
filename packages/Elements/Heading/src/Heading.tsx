import React from 'react';

const Heading = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-heading',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Heading;
