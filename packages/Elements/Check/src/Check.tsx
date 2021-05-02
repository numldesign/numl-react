import React from 'react';

const Check = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  return React.createElement(
    'nu-check',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});
Check.displayName = 'El.Check';

export default Check;
