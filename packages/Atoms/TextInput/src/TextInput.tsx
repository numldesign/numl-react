import * as El from '@numl-react/elements';
import { nanoid } from 'nanoid';
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
    helpText,
    onHelp,
    outline = 'y',
    validation,
    disabled = false,
    ...otherProps
  } = allProps;

  const id = `nu-input-${nanoid()}`;

  return (
    <El.Flex id={`nu-textinput-${nanoid()}`} flow="column" width={width}>
      {label ? (
        <El.Flex content="space-between">
          <El.Label for={id} id={`label-${nanoid()}`}>
            {label}
            {required ? (
              <El.Inline theme="danger" padding="0 1x">
                *
              </El.Inline>
            ) : null}
          </El.Label>
          {link ? (
            <El.Link to={link.to} id={`label-link-${nanoid()}`}>
              {link.text}
            </El.Link>
          ) : (
            link
          )}
        </El.Flex>
      ) : null}
      <El.InputGroup
        id={`input-group-${nanoid()}`}
        height={otherProps.height || undefined}
      >
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
          {validation.map((each: any) => (
            <El.Check
              for={id}
              key={`check-${nanoid()}`}
              assert={each.assert}
              color="hue(1)"
            >
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
  let count = 0;

  const id = nanoid();

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
            radius="0"
            id={id}
            disabled={disabled || disabled === 'true' ? true : undefined}
            {...otherProps}
          />
        </El.Grid>
      </El.InputGroup>
      {validation && validation.length > 0 ? (
        <El.Block>
          {validation.map((each: any) => (
            <El.Check
              for={id}
              // eslint-disable-next-line no-plusplus
              key={count++}
              assert={each.assert}
              color="hue(1)"
            >
              {each.message}
            </El.Check>
          ))}
        </El.Block>
      ) : null}
    </El.Flow>
  );
};

export default TextInput;
