import React from 'react';
import * as El from '@numl-react/elements';

function Icon(allProps: any): JSX.Element {
  const { size, ...otherProps } = allProps;

  return <El.Icon size="1.25rem" {...otherProps} />;
}

export default Icon;
