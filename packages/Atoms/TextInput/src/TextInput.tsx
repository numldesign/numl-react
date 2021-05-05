import T from 'prop-types';
import React from 'react';
import Button from '../../Button/src/Button';
import Icon from '../../Icon/src/Icon';

function TextInput(allProps: any) {
  let { size, prefix, suffix, disabled, clearButton, ...otherInputProps } = allProps;

  const inputSize = size === 'sm' ? '20em' : '100%';

  return (
    <nu-inputgroup width={inputSize} padding="2px">
      {prefix && (typeof prefix === 'string' ? <El.Icon name={prefix} /> : prefix)}
      <nu-input disabled={disabled || undefined} {...otherInputProps} />
      {suffix && (
        <El.Flex items="center">
          <El.Block padding="0 1x">{suffix}</El.Block>
        </El.Flex>
      )}
      {clearButton && !disabled && (
        <Button
          clear
          padding="0"
          onClick={() => {
            console.log('close');
          }}
        >
          <El.Icon name="close-circle-outline" />
        </Button>
      )}
    </nu-inputgroup>
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
          <nu-link to={link} text="n">
            Link
          </nu-link>
        )}
      </El.Flex>
      <TextInput id={label} {...otherProps} />
      {helpText && (
        <El.Flex content="space-between" items="flex-start" color="#text-soft">
          <El.BaseElement text="middle" color="#text-soft">
            {helpText}
          </El.BaseElement>
          {helpTextClear && (
            <Button
              clear
              use-action="no"
              padding="0"
              onClick={() => {
                console.log('clear');
              }}
            >
              <El.Icon name="close" color="#text-soft" />
            </Button>
          )}
        </El.Flex>
      )}
      {validationMessage ? (
        <El.Flex content="flex-start" items="flex-start" theme="danger">
          <Icon name="alert-circle-outline" size="2.4x" padding=".4x 0"></Icon>
          <El.BaseElement text="middle" padding="0 1x">
            {validationMessage}
          </El.BaseElement>
        </El.Flex>
      ) : null}
    </El.Field>
  );
};

TextInput.propTypes = {
  size: T.string,
  prefix: T.oneOfType([T.string, T.element]),
  suffix: T.string,
  placeholder: T.string,
  disabled: T.bool,
  clearButton: T.bool,
  label: T.string,
  required: T.bool,
  link: T.string,
  validationMessage: T.string,
  helpText: T.string,
  helpTextClear: T.bool,
};

export default TextInput;
