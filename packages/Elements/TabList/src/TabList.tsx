import React from 'react';

const TabList = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-tablist',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default TabList;
