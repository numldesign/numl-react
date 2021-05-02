import React from 'react';

const Grid = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  return React.createElement(
    'nu-grid',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});
Grid.displayName = 'El.Grid';

export default Grid;
