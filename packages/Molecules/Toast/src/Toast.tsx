import React from 'react';
import { Block, Grid, Base, Icon } from '../.././../entry';

function Toast(props: any) {
  const { action, text, helpText, icon, theme, ...otherprops } = props;
  return (
    <Block width="17rem" {...otherprops}>
      <Grid
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
        {!icon ? null : <Icon column="1" name="eye-outline"></Icon>}
        <Block>
          <Block>
            <Base column="2" size="16px auto">
              {text}
            </Base>
          </Block>
          {!helpText ? null : (
            <Block>
              <Base column="2" size="14px auto">
                {helpText}
              </Base>
            </Block>
          )}
        </Block>
        {!action ? null : (
          <Base column="3" size="15px auto">
            Button
          </Base>
        )}
        <Icon column="4" name="close-outline"></Icon>
      </Grid>
    </Block>
  );
}

export default Toast;
