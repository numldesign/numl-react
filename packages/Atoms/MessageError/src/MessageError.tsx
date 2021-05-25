import React from 'react';
import { El } from '@numl-react/core';

function MessageError(allProps: any): JSX.Element {
  const { icon, theme, children, ...otherProps } = allProps;

  return (
    <El.Flex gap flow="row wrap" theme={theme} {...otherProps}>
      {icon && typeof icon === 'string' ? (
        <El.Icon padding="0" name={icon} text="middle" />
      ) : (
        icon
      )}
      <El.BaseElement text="middle">{children}</El.BaseElement>
    </El.Flex>
  );
}

export default MessageError;
