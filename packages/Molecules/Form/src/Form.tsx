import React, { useEffect, useRef } from 'react';
import { El } from '../../../Core';

function Form(props: any) {
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
    <El.Label for={name} {...otherProps}>
      {children}
    </El.Label>
  );
};
Form.Field = function FormField(allProps: any) {
  let { label, name, assert, message, children, ...otherProps } = allProps;

  return <El.Field {...otherProps}>{children}</El.Field>;
};
Form.Input = function FormInput(props: any) {
  let { name, ...otherProps } = props;
  return <El.Input id={name} {...otherProps}></El.Input>;
};

Form.Check = function FormCheck(allProps: any) {
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

Form.Submit = function FormSubmit(allProps: any) {
  const { children, ...otherProps } = allProps;
  return (
    <El.Button type="submit" {...otherProps}>
      {children}
    </El.Button>
  );
};

export default Form;
