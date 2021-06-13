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

Form.IFTAlabels = (props: any) => {
  const { label, name, required, ...otherProps } = props;
  return (
    <El.InputGroup block flow="row" fill="input">
      <El.Grid gap columns="1fr" width="100%" padding="1x 2x">
        {label ? (
          <El.Label size="1.5x 2x" for={name}>
            {label}
            {required ? (
              <El.BaseElement padding="0 1x" theme="danger">
                *
              </El.BaseElement>
            ) : null}
          </El.Label>
        ) : null}
        <El.Input padding="0" radius="0" name={name} {...otherProps} />
      </El.Grid>
    </El.InputGroup>
  );
};

Form.Builder = (props: any) => {
  const { form, onSubmit } = props;

  return (
    <Form>
      {React.Children.toArray(
        form.map((eachForm) => (
          <Form.Field>
            <Form.Label>{eachForm.label}</Form.Label>
            <Form.Input name={eachForm.name} id={eachForm.name} />
            {React.Children.toArray(
              eachForm.validator &&
                eachForm.validator.map((eachValidator) => (
                  <Form.Check
                    name={eachForm.name}
                    assert={eachValidator.assert}
                    message={eachValidator.message}
                  />
                ))
            )}
          </Form.Field>
        ))
      )}
      <Form.Submit special onTap={onSubmit}>
        Submit
      </Form.Submit>
    </Form>
  );
};

export default Form;
