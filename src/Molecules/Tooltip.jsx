import React from 'react';

export default function Tooltip(allProps) {
  const { description, width, ...otherProps } = allProps;
  return (
    <nu-tooltip width={width || 'max-content'} {...otherProps}>
      {description}
    </nu-tooltip>
  );
}
