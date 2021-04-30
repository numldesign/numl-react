import React from 'react';

const Button = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const defaultRef = React.useRef();
  React.useEffect(() => {
    if (!ref) {
      /** Incase if user has not provided custom ref parameter */
      ref = defaultRef;
    }
    if (ref && ref.current && ref.current != null && ref.current != undefined) {
      /** Bind tap event to react element */
      onTap && ref.current.addEventListener('tap', onTap);

      return () => {
        /** Release all the memory to avoid memory leak */
        onTap ? ref.current.removeEventListener('tap', onTap) : null;
      };
    }
  }, [ref]);

  return React.createElement(
    'nu-btn',
    {
      ...otherProps,
      ref: ref || defaultRef,
    },
    [children]
  );
});
Button.displayName = 'El.Button';

export default Button;
