import { El } from '@numl-react/core';
import React from 'react';
import Link from '../../Link/src/Link';

function FooterHelp(allProps: any): JSX.Element {
  const {
    label,
    icon,
    link,
    size = 'lg',
    gap = '1x',
    padding = '2x',
    color = 'text',
    linkLabel,
    ...otherProps
  } = allProps;
  return (
    <El.Flex gap={gap} size={size} padding={padding} {...otherProps}>
      {icon && typeof icon === 'string' ? (
        <El.Icon name={icon} padding="0" size={size} color={color} />
      ) : (
        icon
      )}
      {label && typeof label === 'string' ? (
        <El.Label inline size={size} color={color}>
          {label}
        </El.Label>
      ) : (
        label
      )}
      {link && typeof link === 'string' ? (
        <Link
          inline
          to={link}
          size={size}
          label={linkLabel}
          color="special"
          icon="exit-outline"
        />
      ) : (
        link
      )}
    </El.Flex>
  );
}

export default FooterHelp;
