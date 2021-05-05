import React from 'react';

const List = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-list',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default List;
