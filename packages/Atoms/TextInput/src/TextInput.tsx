import React from 'react';
import { El } from '@numl-react/core';
import { v4 } from 'uuid';

function TextInput(allProps: any): JSX.Element {
  const {
    icon,
    onClear = undefined,
    limit,
    required,
    link,
    label,
    helpText,
    validation,
    disabled = false,
    ...otherProps
  } = allProps;

  const id = v4();

  return (
    <El.Flow>
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
      <El.InputGroup>
        {icon &&
          (typeof icon === 'string' ? <El.Icon inline name={icon} /> : icon)}
        <El.Input
          inline
          id={id}
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
          {link ? (
            <El.Button
              border="0"
              padding="0 .5x"
              fill="transparent"
              mark="false"
              hover="false"
              onTap={onClear}
            >
              <El.Icon name="close-outline" />
            </El.Button>
          ) : (
            link
          )}
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
    </El.Flow>
  );
}

TextInput.IFTALabels = function (allProps: any) {
  const {
    icon,
    onClear = undefined,
    limit,
    required,
    link,
    label,
    helpText,
    validation,
    disabled = false,
    ...otherProps
  } = allProps;

  const id = v4();

  return (
    <El.Flow>
      <El.InputGroup flex flow="row" fill="input">
        <El.Block>
          {label ? (
            <El.Label for={id} padding="1x 0 0 2x" size="1.5x 2x">
              {label}
              {required ? (
                <El.BaseElement padding="0 1x" theme="danger">
                  *
                </El.BaseElement>
              ) : null}
            </El.Label>
          ) : null}
          {icon &&
            (typeof icon === 'string' ? <El.Icon inline name={icon} /> : icon)}
          <El.Input
            padding="0 0 1x 2x"
            inline
            id={id}
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
        </El.Block>
      </El.InputGroup>
      {helpText ? (
        <El.Flex content="space-between">
          <El.Label size="sm">{helpText}</El.Label>
          {link ? (
            <El.Button
              border="0"
              padding="0 .5x"
              fill="transparent"
              mark="false"
              hover="false"
              onTap={onClear}
            >
              <El.Icon name="close-outline" />
            </El.Button>
          ) : (
            link
          )}
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
    </El.Flow>
  );
};

export default TextInput;
