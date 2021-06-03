import React from 'react';
import * as El from '@numl-react/elements';

function Link(allProps: any): JSX.Element {
  const {
    label,
    size,
    theme,
    gap = '1x',
    color,
    icon,
    ...otherProps
  } = allProps;

  return (
    <El.Link as="nu-link" text="n" {...otherProps}>
      <El.Flex flex gap={gap} items="center">
        {label && typeof label === 'string' ? (
          <El.Label inline size={size} theme={theme} color={color}>
            {label}
          </El.Label>
        ) : (
          label
        )}
        {icon && typeof icon === 'string' ? (
          <El.Icon
            inline
            text="center"
            name={icon}
            size={size}
            theme={theme}
            color={color}
          />
        ) : (
          icon
        )}
      </El.Flex>
    </El.Link>
  );
}

export default Link;
