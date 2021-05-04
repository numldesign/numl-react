import React from 'react';

const DatePicker = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-datepicker',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default DatePicker;
