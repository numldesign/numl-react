import React, { useEffect, useRef } from 'react';
import { Button, Input } from '../../../entry';

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
    <nu-label for={name} {...otherProps}>
      {children}
    </nu-label>
  );
};
Form.Field = function FormField(allProps: any) {
  let { label, name, assert, message, children, ...otherProps } = allProps;

  return <nu-field {...otherProps}>{children}</nu-field>;
};
Form.Input = function FormInput(props: any) {
  let { name, ...otherProps } = props;
  return <Input id={name} {...otherProps}></Input>;
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
    <Button type="submit" {...otherProps}>
      {children}
    </Button>
  );
};

export default Form;
