import T from 'prop-types';
import React from 'react';
import Button from '../../Button/src/Button';
import Icon from '../../Icon/src/Icon';

function TextInput(allProps: any) {
  let { size, prefix, suffix, disabled, clearButton, ...otherInputProps } = allProps;

  const inputSize = size === 'sm' ? '20em' : '100%';

  return (
    <nu-inputgroup width={inputSize} padding="2px">
      {prefix && (typeof prefix === 'string' ? <nu-icon name={prefix} /> : prefix)}
      <nu-input disabled={disabled || undefined} {...otherInputProps} />
      {suffix && (
        <nu-flex items="center">
          <nu-block padding="0 1x">{suffix}</nu-block>
        </nu-flex>
      )}
      {clearButton && !disabled && (
        <Button
          clear
          padding="0"
          onClick={() => {
            console.log('close');
          }}
        >
          <nu-icon name="close-circle-outline" />
        </Button>
      )}
    </nu-inputgroup>
  );
}

TextInput.Field = function TextField(allProps: any) {
  let { label, required, link, validationMessage, helpText, helpTextClear, ...otherProps } = allProps;

  let inputSize = otherProps.size === 'sm' ? '20em' : '100%';

  return (
    <nu-field width={inputSize}>
      <nu-flex content="space-between">
        <nu-label for={label}>
          {label} {required && <nu-el theme="danger">{` * `}</nu-el>}
        </nu-label>
        {link && (
          <nu-link to={link} text="n">
            Link
          </nu-link>
        )}
      </nu-flex>
      <TextInput id={label} {...otherProps} />
      {helpText && (
        <nu-flex content="space-between" items="flex-start" color="#text-soft">
          <nu-el text="middle" color="#text-soft">
            {helpText}
          </nu-el>
          {helpTextClear && (
            <Button
              clear
              use-action="no"
              padding="0"
              onClick={() => {
                console.log('clear');
              }}
            >
              <nu-icon name="close" color="#text-soft" />
            </Button>
          )}
        </nu-flex>
      )}
      {validationMessage ? (
        <nu-flex content="flex-start" items="flex-start" theme="danger">
          <Icon name="alert-circle-outline" size="2.4x" padding=".4x 0"></Icon>
          <nu-el text="middle" padding="0 1x">
            {validationMessage}
          </nu-el>
        </nu-flex>
      ) : null}
    </nu-field>
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
