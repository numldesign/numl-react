import React, { useEffect, useRef } from 'react';

function Form(props) {
  const { gap, children, ...otherProps } = props;

  return (
    <nu-form gap={gap} {...otherProps}>
      {children}
    </nu-form>
  );
}

Form.Label = function FormLabel(allProps: any) {
  let { children, name, ...otherProps } = allProps;
  return (
    <nu-label for={name} {...otherProps}>
      {children}
    </nu-label>
  );
};
Form.Field = function FormField(allProps: any) {
  let { label, name, assert, message, children, ...otherProps } = allProps;

  return <nu-field {...otherProps}>{children}</nu-field>;
};
Form.Input = function FormInput(props) {
  let { name, ...otherProps } = props;
  return <nu-input id={name} {...otherProps}></nu-input>;
};

Form.Check = function FormCheck(allProps) {
  var { message, name, assertFunction } = allProps;
  var ref: any = useRef(null);

  useEffect(() => {
    ref.current.assert = assertFunction;
    return;
  }, []);

  return (
    <nu-check for={name} ref={ref} color="hue(1)">
      {message}
    </nu-check>
  );
};

Form.Submit = function FormSubmit(allProps) {
  const { children, ...otherProps } = allProps;
  return (
    <nu-btn type="submit" {...otherProps}>
      {children}
    </nu-btn>
  );
};

export default Form;
