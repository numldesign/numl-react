import React from 'react';

const ThemeProvider = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-theme',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default ThemeProvider;
