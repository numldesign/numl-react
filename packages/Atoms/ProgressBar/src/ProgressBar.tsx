import React from 'react';
import { El } from '@numl-react/core';

function ProgressBar(allProps: any): JSX.Element {
  const { width = '25', ...otherProps } = allProps;
  return (
    <El.Block width={width}>
      <El.ProgressBar width={width} {...otherProps} />
    </El.Block>
  );
}

export default ProgressBar;
