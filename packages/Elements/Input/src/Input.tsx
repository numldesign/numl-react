import React, { useEffect } from 'react';
import { isRefernceNull } from '@numl-react/utility';

const Input = React.forwardRef((props: any, ref: any) => {
  const { children, onChange, ...otherProps } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [refer] = React.useState(ref || React.useRef());

  function invokeChangeEvent(event: any) {
    if (onChange) {
      onChange(event, refer.current);
    }
  }

  useEffect(() => {
    if (isRefernceNull(refer)) {
      /** Bind tap event to react element */

      // eslint-disable-next-line no-unused-expressions
      onChange && refer.current.addEventListener('keyup', invokeChangeEvent);

      return () => {
        /** Release all the memory to avoid memory leak */

        if (refer && refer.current) {
          /** only clean memory then reference to element exist */

          // eslint-disable-next-line no-unused-expressions
          onChange &&
            refer.current.removeEventListener('keyup', invokeChangeEvent);
        }
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  return React.createElement(
    'nu-input',
    {
      ...otherProps,
      ref: refer,
    },
    [children]
  );
});
export default Input;
