import React from 'react';

export default function TextArea(allProps) {
  const { ...otherProps } = allProps;
  return <nu-textarea {...otherProps} />;
}

TextArea.Field = function TextAreaField(allProps) {
  const { children, fieldProps = {}, ...otherProps } = allProps;

  return (
    <nu-field {...fieldProps}>
      {children}
      <TextArea {...otherProps} />
    </nu-field>
  );
};
