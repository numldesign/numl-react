import React from 'react';

function Toast(props) {
  const { action, text, helpText, icon, theme, ...otherprops } = props;
  return (
    <nu-block width="17rem">
      <nu-grid
        columns="auto 3fr auto auto"
        cursor="pointer"
        theme={theme}
        gap
        row="1fr"
        fill="#bg"
        border="1px danger"
        radius="8px"
        padding
        items="start"
      >
        {!icon ? null : <nu-icon column="1" name="eye-outline"></nu-icon>}
        <nu-block>
          <nu-block>
            <nu-el column="2" size="16px auto">
              {text}
            </nu-el>
          </nu-block>
          {!helpText ? null : (
            <nu-block>
              <nu-el column="2" size="14px auto">
                {helpText}
              </nu-el>
            </nu-block>
          )}
        </nu-block>
        {!action ? null : (
          <nu-el column="3" size="15px auto">
            Button
          </nu-el>
        )}
        <nu-icon column="4" name="close-outline"></nu-icon>
      </nu-grid>
    </nu-block>
  );
}

export default Toast;
