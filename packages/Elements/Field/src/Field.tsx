import React from 'react';

const Field = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  return React.createElement(
    'nu-field',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});

export default Field;
