import React from 'react';
import * as El from '@numl-react/elements';

function Icon(allProps: any): JSX.Element {
  const { size = '1.25rem', ...otherProps } = allProps;

  return <El.Icon size={size} {...otherProps} />;
}

export default Icon;
