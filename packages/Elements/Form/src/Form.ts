import { isRefernceNull } from '@numl-react/utility';
import React, { useEffect, useRef } from 'react';

const Form = React.forwardRef((props: any, ref: any) => {
  const { children, onSubmit, ...otherProps } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [refer] = React.useState(ref || useRef());

  useEffect(() => {
    if (isRefernceNull(refer)) {
      /** Bind tap event to react element */

      // eslint-disable-next-line no-unused-expressions
      onSubmit && refer.current.addEventListener('submit', onSubmit);

      return () => {
        /** Release all the memory to avoid memory leak */

        if (refer && refer.current) {
          /** only clean memory then reference to element exist */

          // eslint-disable-next-line no-unused-expressions
          onSubmit && refer.current.removeEventListener('submit', onSubmit);
        }
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

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
