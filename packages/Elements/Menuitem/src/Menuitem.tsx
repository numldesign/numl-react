import React from 'react';
import { useEventListener } from '@numl-react/utility';

const Menuitem = React.forwardRef((props: any, ref) => {
  const { children, onClick, beforeClick, afterClick, ...otherProps } = props;
  const buttonRef = React.useRef<any>(ref);

  const clickEvent: any = (event: React.SyntheticEvent) => {
    beforeClick && beforeClick(event);
    onClick && onClick(event);
    afterClick && afterClick(event);
  };

  useEventListener('click', clickEvent, buttonRef);

  return React.createElement(
    'nu-menuitem',
    {
      ...otherProps,
      ref: buttonRef,
    },
    [children]
  );
});
export default Menuitem;
