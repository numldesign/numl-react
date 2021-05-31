import React from 'react';
import * as El from '@numl-react/elements';
import { v4 } from 'uuid';

function TextInput(allProps: any): JSX.Element {
  const {
    icon,
    onClear = undefined,
    limit,
    required,
    link,
    label,
    width,
    helpText,
    onHelp,
    outline = 'y',
    validation,
    disabled = false,
    ...otherProps
  } = allProps;

  const id = v4();

  return (
    <El.Flex flow="column" width={width}>
      {label ? (
        <El.Flex content="space-between">
          <El.Label for={id}>
            {label}
            {required ? (
              <El.BaseElement padding="0 1x" theme="danger">
                *
              </El.BaseElement>
            ) : null}
          </El.Label>
          {link ? (
            <El.Link to={link.to} text="n">
              {link.text}
            </El.Link>
          ) : (
            link
          )}
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
          id={id}
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
            border="0"
            padding="0 0.5x"
            fill="transparent"
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
          {validation.map((each: any) => (
            <El.Check for={id} assert={each.assert} color="hue(1)">
              {each.message}
            </El.Check>
          ))}
        </El.Block>
      ) : null}
    </El.Flex>
  );
}

TextInput.IFTALabels = (allProps: any) => {
  const {
    required,
    label,
    validation,
    disabled = false,
    ...otherProps
  } = allProps;

  const id = v4();

  return (
    <El.Flow>
      <El.InputGroup block flow="row" fill="input">
        <El.Grid gap columns="1fr" width="100%" padding="1x 2x">
          {label ? (
            <El.Label for={id} size="1.5x 2x">
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
            id={id}
            disabled={disabled || disabled === 'true' ? true : undefined}
            {...otherProps}
          />
        </El.Grid>
      </El.InputGroup>
      {validation && validation.length > 0 ? (
        <El.Block>
          {validation.map((each: any) => (
            <El.Check for={id} assert={each.assert} color="hue(1)">
              {each.message}
            </El.Check>
          ))}
        </El.Block>
      ) : null}
    </El.Flow>
  );
};

export default TextInput;
