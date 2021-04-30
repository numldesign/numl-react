import React from 'react';

const Pane = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-pane',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
Pane.displayName = 'El.Pane';

export default Pane;
