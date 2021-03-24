import React from 'react';
import { TTooltipProps } from './Tooltip.type';

function Tooltip(allProps: TTooltipProps) {
  const { description, width, ...otherProps } = allProps;
  return (
    <nu-tooltip width={width || 'max-content'} {...otherProps}>
      {description}
    </nu-tooltip>
  );
}

export default Tooltip;
