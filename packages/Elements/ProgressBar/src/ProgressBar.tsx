import React from 'react';

const ProgressBar = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-progressbar',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default ProgressBar;
