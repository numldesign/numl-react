import React from 'react';

const Flex = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  return React.createElement(
    'nu-flex',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});
Flex.displayName = 'El.Flex';

export default Flex;
