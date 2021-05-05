import React from 'react';
import { El } from '../.././../Core';

function Toast(props: any) {
  const { action, text, helpText, icon, theme, ...otherprops } = props;
  return (
    <El.Block width="17rem" {...otherprops}>
      <El.Grid
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
        {!icon ? null : <El.Icon column="1" name="eye-outline"></El.Icon>}
        <El.Block>
          <El.Block>
            <El column="2" size="16px auto">
              {text}
            </El>
          </El.Block>
          {!helpText ? null : (
            <El.Block>
              <El column="2" size="14px auto">
                {helpText}
              </El>
            </El.Block>
          )}
        </El.Block>
        {!action ? null : (
          <El column="3" size="15px auto">
            Button
          </El>
        )}
        <El.Icon column="4" name="close-outline"></El.Icon>
      </El.Grid>
    </El.Block>
  );
}

export default Toast;
