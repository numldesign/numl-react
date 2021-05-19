import React from 'react';
import { El } from '@numl-react/core';

function Icon(allProps: any): JSX.Element {
  const { size, ...otherProps } = allProps;

  return <El.Icon size="1.25rem" {...otherProps} />;
}

export default Icon;
