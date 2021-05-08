import React from 'react';

const DateInput = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-dateinput',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default DateInput;
