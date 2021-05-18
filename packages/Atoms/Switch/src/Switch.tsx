import React from 'react';
import { El } from '@numl-react/core';

export default function Switch(allProps: any): JSX.Element {
  const { label, size, value, ...otherProps } = allProps;

  return (
    <El.Flex gap>
      <El.Switch inline size={size} {...otherProps} value={value} />
      {label && typeof label === 'string' ? (
        <El.Label inline size={size}>
          {label}
        </El.Label>
      ) : (
        label
      )}
    </El.Flex>
  );
}
