import React from 'react';

const Tab = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-tab',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Tab;
