import React from 'react';
import { El } from '@numl-react/core';

function TextArea(allProps: any) {
  const { children, fieldProps = {}, ...otherProps } = allProps;

  return (
    <El.Field {...fieldProps}>
      {children}
      <El.TextArea {...otherProps} />
    </El.Field>
  );
}

export default TextArea;
