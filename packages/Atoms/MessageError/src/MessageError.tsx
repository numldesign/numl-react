import React from 'react';
import { TMessageErrorProps } from './MessageError.type';

function MessageError(allProps: TMessageErrorProps) {
  let { icon, theme, children, ...otherProps } = allProps;

  return (
    <El.BaseElement theme={theme} {...otherProps}>
      {typeof icon === 'string' ? <El.Icon name={icon} text="middle" /> : icon}
      <El.BaseElement text="middle" padding="1x left">
        {children}
      </El.BaseElement>
    </El.BaseElement>
  );
}

export default MessageError;
