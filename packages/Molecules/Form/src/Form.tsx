import * as React from 'react';
import { El } from '../../../entry';

/**
 * Form Component for Numl React
 */
const Form = React.forwardRef((props: any, ref) => {
  const { gap, children, ...otherProps } = props;

  return (
    <El.Form ref={ref} gap={gap} {...otherProps}>
      {children}
    </El.Form>
  );
});
Form.displayName = 'Molecules.Form';

/**
 * Form label
 */
const FormLabel = React.forwardRef((allProps: any, ref) => {
  let { children, name, ...otherProps } = allProps;
  return (
    <El.Label ref={ref} for={name} {...otherProps}>
      {children}
    </El.Label>
  );
});
FormLabel.displayName = 'Molecules.FormLabel';

/**
 * Form Field
 */
const FormField = React.forwardRef((allProps: any, ref) => {
  let { children, ...otherProps } = allProps;

  return (
    <El.Field ref={ref} {...otherProps}>
      {children}
    </El.Field>
  );
});

/**
 * Form Input
 */
const FormInput = React.forwardRef((props: any, ref) => {
  let { name, ...otherProps } = props;
  return <El.Input ref={ref} id={name} {...otherProps}></El.Input>;
});
FormInput.displayName = 'Molecules.FormInput';

/**
 * Form Check
 */
const FormCheck = React.forwardRef((allProps: any, ref: any) => {
  var { message, name, assertFunction } = allProps;

  React.useEffect(() => {
    if (ref && ref.current && ref.current != undefined) {
      ref.current.assert = assertFunction;
    }
  }, []);

  return (
    <El.Check for={name} ref={ref}>
      {message}
    </El.Check>
  );
});
FormCheck.displayName = 'Molecules.FormCheck';

/**
 * Form Submit
 */
const FormSubmit = React.forwardRef((allProps: any, ref) => {
  const { children, ...otherProps } = allProps;
  return (
    <El.Button ref={ref} type="submit" {...otherProps}>
      {children}
    </El.Button>
  );
});
FormSubmit.displayName = 'Molecules.FormSubmit';

export { Form, FormCheck, FormField, FormInput, FormLabel, FormSubmit };
