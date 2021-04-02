import React from 'react';
import { TMessageErrorProps } from './MessageError.type';

function MessageError(allProps: TMessageErrorProps) {
  let { icon, theme, children, ...otherProps } = allProps;

  return (
    <nu-el theme={theme} {...otherProps}>
      {typeof icon === 'string' ? <nu-icon name={icon} text="middle" /> : icon}
      <nu-el text="middle" padding="1x left">
        {children}
      </nu-el>
    </nu-el>
  );
}

export default MessageError;
