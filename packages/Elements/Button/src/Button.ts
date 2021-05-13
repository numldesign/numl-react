import React, { useEffect } from 'react';
import { isRefernceNull } from '@numl-react/utility';

const Button = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [refer] = React.useState(ref || React.useRef());

  useEffect(() => {
    if (isRefernceNull(refer)) {
      /** Bind tap event to react element */

      // eslint-disable-next-line no-unused-expressions
      onTap && refer.current.addEventListener('tap', onTap);

      return () => {
        /** Release all the memory to avoid memory leak */

        if (refer && refer.current) {
          /** only clean memory then reference to element exist */

          // eslint-disable-next-line no-unused-expressions
          onTap && refer.current.removeEventListener('tap', onTap);
        }
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  return React.createElement(
    'nu-btn',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});
Button.displayName = 'El.Button';

export default Button;
