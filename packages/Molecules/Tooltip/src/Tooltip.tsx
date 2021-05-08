import React from 'react';
import { El } from '@numl-react/core';

function Tooltip(allProps: any) {
  const { description, width, ...otherProps } = allProps;
  return (
    <El.Tooltip width={width || 'max-content'} {...otherProps}>
      {description}
    </El.Tooltip>
  );
}

export default Tooltip;
