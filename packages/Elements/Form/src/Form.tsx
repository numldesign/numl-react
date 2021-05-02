import React from 'react';

const Form = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  return React.createElement(
    'nu-form',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});

export default Form;
