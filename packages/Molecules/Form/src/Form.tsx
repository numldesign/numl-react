import { El } from '@numl-react/core';
import React from 'react';

const Form = (props: any): JSX.Element => {
  const { children, ...otherProps } = props;

  return <El.Form {...otherProps}>{children}</El.Form>;
};

Form.Label = function FormLabel(allProps: any): JSX.Element {
  const { children, name, ...otherProps } = allProps;
  return (
    <El.Label for={name} {...otherProps}>
      {children}
    </El.Label>
  );
};
Form.Field = function FormField(allProps: any): JSX.Element {
  const { children, ...otherProps } = allProps;

  return <El.Field {...otherProps}>{children}</El.Field>;
};
Form.Input = function FormInput(props: any): JSX.Element {
  const { children, ...otherProps } = props;
  return <El.Input {...otherProps} />;
};

Form.Check = function FormCheck(allProps: any): JSX.Element {
  const { message, name, assert } = allProps;
  const ref: any = React.useRef(null);

  React.useEffect(() => {
    ref.current.assert = assert;
  }, []);

  return (
    <El.Check for={name} ref={ref} color="hue(1)">
      {message}
    </El.Check>
  );
};

Form.Submit = function FormSubmit(allProps: any): JSX.Element {
  const { children, ...otherProps } = allProps;
  return (
    <El.Button action="submit" {...otherProps}>
      {children}
    </El.Button>
  );
};

Form.Builder = (props: any) => {
  const { form } = props;

  return (
    <Form>
      {React.Children.toArray(
        form.map((eachForm) => (
          <Form.Field>
            <Form.Label>{eachForm.label}</Form.Label>
            <Form.Input name={eachForm.name} id={eachForm.name} />
            <Form.Check name={eachForm.name} assert={eachForm.assert}>
              {eachForm.message}
            </Form.Check>
          </Form.Field>
        ))
      )}
      <Form.Submit special>Submit</Form.Submit>
    </Form>
  );
};

export default Form;
