import * as El from '@numl-react/elements';
import React from 'react';

function TextInput(allProps: any): JSX.Element {
  const {
    icon,
    onClear = undefined,
    limit,
    children,
    required,
    link,
    label,
    width,
    name,
    helpText,
    onHelp,
    validation,
    ...otherProps
  } = allProps;

  return (
    <El.Flex flow="column" width={width}>
      {label ? (
        <El.Flex content="space-between">
          <El.Label for={name}>
            {label}
            {required ? (
              <El.Inline theme="danger" padding="0 1x">
                *
              </El.Inline>
            ) : null}
          </El.Label>
          {link ? <El.Link to={link.to}>{link.text}</El.Link> : link}
        </El.Flex>
      ) : null}
      <El.InputGroup height={otherProps.height || undefined}>
        {icon &&
          (typeof icon === 'string' ? (
            <El.Icon inline padding="0 1x" name={icon} />
          ) : (
            icon
          ))}
        <El.Input inline name={name} id={name} {...otherProps} />
        {limit && (
          <El.Flex items="center">
            <El.Block padding="0 1x">{limit}</El.Block>
          </El.Flex>
        )}
        {onClear ? (
          <El.Button
            border="left"
            padding="1x .5x"
            fill="transparent"
            onTap={onClear}
          >
            <El.Icon name="close-circle-outline" />
          </El.Button>
        ) : null}
      </El.InputGroup>
      {helpText ? (
        <El.Flex content="space-between">
          <El.Label size="sm">{helpText}</El.Label>
          <El.Button
            clear
            padding="0 0.5x"
            onTap={onHelp}
            mark="false"
            hover="false"
          >
            <El.Icon name="close-outline" />
          </El.Button>
        </El.Flex>
      ) : null}
      <Field.Check name={name} validation={validation} />
    </El.Flex>
  );
}

TextInput.IFTALabels = (allProps: any) => {
  const { required, label, name, validation, ...otherProps } = allProps;

  return (
    <El.Field name={name}>
      <Field label={label} name={name} required={required} {...otherProps} />
      <Field.Check validation={validation} name={name} />
    </El.Field>
  );
};

TextInput.Check = (allProps: any): JSX.Element => {
  const { message, name, assert } = allProps;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref: any = React.useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    ref.current.assert = assert;
  }, []);

  return (
    <El.Check for={name} ref={ref} color="hue(1)">
      {message}
    </El.Check>
  );
};

const Field = (props: any) => {
  const { label, name, required, ...otherProps } = props;
  return (
    <El.InputGroup block flow="row" fill="input">
      <El.Grid gap columns="1fr" width="100%" padding="1x 2x">
        {label ? (
          <El.Label size="1.5x 2x">
            {label}
            {required ? (
              <El.BaseElement padding="0 1x" theme="danger">
                *
              </El.BaseElement>
            ) : null}
          </El.Label>
        ) : null}
        <El.Input
          padding="0"
          radius="0"
          id={name}
          name={name}
          {...otherProps}
        />
      </El.Grid>
    </El.InputGroup>
  );
};

Field.Check = (props: any) => {
  const { validation, name } = props;
  return (
    <>
      {validation && validation.length > 0
        ? React.Children.toArray(
            validation.map((each: any) => (
              <TextInput.Check
                assert={each.assert}
                message={each.message}
                name={name}
              />
            ))
          )
        : null}
    </>
  );
};

export default TextInput;
