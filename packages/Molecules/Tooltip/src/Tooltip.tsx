import React from 'react';
import { TTooltipProps } from './Tooltip.type';

function Tooltip(allProps: TTooltipProps) {
  const { description, width, ...otherProps } = allProps;
  return (
    <El.Tooltip width={width || 'max-content'} {...otherProps}>
      {description}
    </El.Tooltip>
  );
}

export default Tooltip;
