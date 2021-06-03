import React from 'react';
import * as El from '@numl-react/elements';

function MessageError(allProps: any): JSX.Element {
  const { icon, gap = '1x', children, ...otherProps } = allProps;

  return (
    <El.Flex gap={gap} flow="row wrap" items="center" {...otherProps}>
      {icon && typeof icon === 'string' ? <El.Icon name={icon} /> : icon}
      <El.Label>{children}</El.Label>
    </El.Flex>
  );
}

export default MessageError;
