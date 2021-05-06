import React from 'react';
import { El } from '../../../Core';

function TextInput(allProps: any) {
  let { size, prefix, suffix, disabled, clearButton, ...otherInputProps } = allProps;

  const inputSize = size === 'sm' ? '20em' : '100%';

  return (
    <El.InputGroup width={inputSize} padding="2px">
      {prefix && (typeof prefix === 'string' ? <El.Icon name={prefix} /> : prefix)}
      <El.Input disabled={disabled || undefined} {...otherInputProps} />
      {suffix && (
        <El.Flex items="center">
          <El.Block padding="0 1x">{suffix}</El.Block>
        </El.Flex>
      )}
      {clearButton && !disabled && (
        <El.Button
          clear
          padding="0"
          onClick={() => {
            console.log('close');
          }}
        >
          <El.Icon name="close-circle-outline" />
        </El.Button>
      )}
    </El.InputGroup>
  );
}

TextInput.Field = function TextField(allProps: any) {
  let { label, required, link, validationMessage, helpText, helpTextClear, ...otherProps } = allProps;

  let inputSize = otherProps.size === 'sm' ? '20em' : '100%';

  return (
    <El.Field width={inputSize}>
      <El.Flex content="space-between">
        <El.Label for={label}>
          {label} {required && <El.BaseElement theme="danger">{` * `}</El.BaseElement>}
        </El.Label>
        {link && (
          <El.Link to={link} text="n">
            Link
          </El.Link>
        )}
      </El.Flex>
      <TextInput id={label} {...otherProps} />
      {helpText && (
        <El.Flex content="space-between" items="flex-start" color="#text-soft">
          <El.BaseElement text="middle" color="#text-soft">
            {helpText}
          </El.BaseElement>
          {helpTextClear && (
            <El.Button
              clear
              use-action="no"
              padding="0"
              onClick={() => {
                console.log('clear');
              }}
            >
              <El.Icon name="close" color="#text-soft" />
            </El.Button>
          )}
        </El.Flex>
      )}
      {validationMessage ? (
        <El.Flex content="flex-start" items="flex-start" theme="danger">
          <El.Icon name="alert-circle-outline" size="2.4x" padding=".4x 0"></El.Icon>
          <El.BaseElement text="middle" padding="0 1x">
            {validationMessage}
          </El.BaseElement>
        </El.Flex>
      ) : null}
    </El.Field>
  );
};

export default TextInput;
