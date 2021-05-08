import React from 'react';

const Option = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-option',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Option;
