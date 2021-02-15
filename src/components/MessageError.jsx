import React from 'react';
import T from 'prop-types';

import { themeAttr } from '../helpers';

export default function MessageError(allProps) {
  let { iconName, theme, message, ...otherProps } = allProps;

  return (
    <nu-el theme={theme || themeAttr(allProps, true)} {...otherProps}>
      <nu-icon name={iconName} text="middle"></nu-icon>
      <nu-el text="middle" padding="1x left">
        {message}
      </nu-el>
    </nu-el>
  );
}

MessageError.propTypes = {
  iconName: T.string,
  message: T.string,
};
