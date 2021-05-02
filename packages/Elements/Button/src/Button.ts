import * as React from 'react';
import * as Object from '../../../Utilities';
const Button = React.forwardRef((props: any, ref: any) => {
  const { children, onTap, ...otherProps } = props;
  const [refer] = React.useState(ref || React.useRef());

  React.useEffect(
    function () {
      if (Object.isRefernceNull(refer)) {
        /** Bind tap event to react element */
        onTap && refer.current.addEventListener('tap', onTap);

        return () => {
          /** Release all the memory to avoid memory leak */
          if (refer && refer.current) {
            /** only clean memory then reference to element exist */
            onTap ? refer.current.removeEventListener('tap', onTap) : null;
          }
        };
      }
    },
    [refer]
  );

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
