import React from 'react';
import * as El from '@numl-react/elements';

function ProgressBar(allProps: any): JSX.Element {
  const { width = '100vw', ...otherProps } = allProps;
  return (
    <El.Block width={width}>
      <El.ProgressBar width={width} {...otherProps} />
    </El.Block>
  );
}

export default ProgressBar;
