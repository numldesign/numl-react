import React from 'react';

const Group = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-group',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Group;
