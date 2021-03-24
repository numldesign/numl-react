import React from 'react';
import { TTextAreaFieldProps, TTextAreaProps } from './TextArea.type';

function TextArea(allProps: TTextAreaProps) {
  const { ...otherProps } = allProps;
  return <nu-textarea {...otherProps} />;
}

TextArea.Field = function TextAreaField(allProps: TTextAreaFieldProps) {
  const { children, fieldProps = {}, ...otherProps } = allProps;

  return (
    <nu-field {...fieldProps}>
      {children}
      <TextArea {...otherProps} />
    </nu-field>
  );
};

export default TextArea;
