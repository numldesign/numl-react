import * as React from 'react';

const ButtonGroup = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  return React.createElement(
    'nu-btngroup',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});
ButtonGroup.displayName = 'El.ButtonGroup';

export default ButtonGroup;
