import React from 'react';

const OneTimeCode = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-onetimecode',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default OneTimeCode;
