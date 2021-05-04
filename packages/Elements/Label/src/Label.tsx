import React from 'react';

const Label = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  return React.createElement(
    'nu-label',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});
Label.displayName = 'El.Label';

export default Label;
