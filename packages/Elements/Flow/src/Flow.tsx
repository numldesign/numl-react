import React from 'react';

const Flow = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  return React.createElement(
    'nu-flow',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});
Flow.displayName = 'El.Flow';

export default Flow;
