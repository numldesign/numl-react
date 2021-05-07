import React from 'react';
import { El } from '@numl-react/core';
import { TTextAreaFieldProps, TTextAreaProps } from './TextArea.type';
function TextArea(allProps: TTextAreaProps) {
  const { ...otherProps } = allProps;
  return <El.TextArea {...otherProps} />;
}

TextArea.Field = function TextAreaField(allProps: TTextAreaFieldProps) {
  const { children, fieldProps = {}, ...otherProps } = allProps;

  return (
    <El.Field {...fieldProps}>
      {children}
      <El.TextArea {...otherProps} />
    </El.Field>
  );
};

export default TextArea;
