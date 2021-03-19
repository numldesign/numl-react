import React from 'react';
import T from 'prop-types';

import { themeAttr } from '../../helpers';

export default function MessageError(allProps) {
  let { icon, theme, message, ...otherProps } = allProps;

  return (
    <nu-el theme={theme || themeAttr(allProps, true)} {...otherProps}>
      {typeof icon === 'string' ? <nu-icon name={icon} text="middle" /> : icon}
      <nu-el text="middle" padding="1x left">
        {message}
      </nu-el>
    </nu-el>
  );
}

MessageError.propTypes = {
  icon: T.oneOfType([T.string, T.element]),
  message: T.string,
};
