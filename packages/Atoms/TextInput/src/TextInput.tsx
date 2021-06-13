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
    outline = 'y',
    validation,
    disabled = false,
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
        <El.Input
          inline
          name={name}
          outline={outline}
          disabled={disabled || disabled === 'true' ? true : undefined}
          {...otherProps}
        />
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
      {validation && validation.length > 0 ? (
        <El.Block>
          {React.Children.toArray(
            validation.map((each: any) => (
              <El.Check assert={each.assert} for={name} color="hue(1)">
                {each.message}
              </El.Check>
            ))
          )}
        </El.Block>
      ) : null}
    </El.Flex>
  );
}

TextInput.IFTALabels = (allProps: any) => {
  const {
    required,
    label,
    name,
    validation,
    disabled = false,
    ...otherProps
  } = allProps;

  return (
    <El.Field>
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
          <El.Input
            padding="0"
            radius="0"
            name={name}
            disabled={disabled || disabled === 'true' ? true : undefined}
            {...otherProps}
          />
        </El.Grid>
      </El.InputGroup>
      {validation && validation.length > 0 ? (
        <El.Block>
          {React.Children.toArray(
            validation.map((each: any) => (
              <El.Check assert={each.assert} for={name} color="hue(1)">
                {each.message}
              </El.Check>
            ))
          )}
        </El.Block>
      ) : null}
    </El.Field>
  );
};

export default TextInput;
