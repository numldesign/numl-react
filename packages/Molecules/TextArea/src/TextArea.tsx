import React from 'react';
import { TTextAreaFieldProps, TTextAreaProps } from './TextArea.type';

function TextArea(allProps: TTextAreaProps) {
  const { ...otherProps } = allProps;
  return <nu-textarea {...otherProps} />;
}

TextArea.Field = function TextAreaField(allProps: TTextAreaFieldProps) {
  const { children, fieldProps = {}, ...otherProps } = allProps;

  return (
    <El.Field {...fieldProps}>
      {children}
      <TextArea {...otherProps} />
    </El.Field>
  );
};

export default TextArea;
