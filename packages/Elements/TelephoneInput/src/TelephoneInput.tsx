import React from 'react';

const TelephoneInput = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-telinput',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default TelephoneInput;
