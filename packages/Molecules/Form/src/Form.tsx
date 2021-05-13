import React, { useEffect, useRef } from 'react';
import { El } from '@numl-react/core';

function Form(props: any) {
  const { gap, children, ...otherProps } = props;

  return (
    <El.Form gap={gap} {...otherProps}>
      {children}
    </El.Form>
  );
}

Form.Label = function FormLabel(allProps: any) {
  const { children, name, ...otherProps } = allProps;
  return (
    <El.Label for={name} {...otherProps}>
      {children}
    </El.Label>
  );
};
Form.Field = function FormField(allProps: any) {
  const { label, name, assert, message, children, ...otherProps } = allProps;

  return <El.Field {...otherProps}>{children}</El.Field>;
};
Form.Input = function FormInput(props: any) {
  const { name, ...otherProps } = props;
  return <El.Input id={name} {...otherProps} />;
};

Form.Check = function FormCheck(allProps: any) {
  const { message, name, assertFunction } = allProps;
  const ref: any = useRef(null);

  useEffect(() => {
    ref.current.assert = assertFunction;
  }, []);

  return (
    <El.Check for={name} ref={ref} color="hue(1)">
      {message}
    </El.Check>
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
