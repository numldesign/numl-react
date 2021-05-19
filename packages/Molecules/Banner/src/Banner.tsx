import React from 'react';
import { El } from '@numl-react/core';

function Banner(allProps: any): JSX.Element {
  const {
    prefix,
    heading,
    children,
    footerActions,
    closeAction,
    ...otherProps
  } = allProps;

  return (
    <El.Pane
      radius="1x"
      border="1bw"
      fill="bg"
      padding="1.25"
      gap="2x"
      items="start"
      {...otherProps}
    >
      {prefix && typeof prefix === 'string' ? (
        <El.Icon name={prefix} />
      ) : (
        prefix
      )}
      <El.Pane flex="1" items="flex-start" flow="column" gap="2x">
        <El.Block>
          {heading ? (
            <El.Block text="sb" size="lg" color="#text-soft">
              {heading}
            </El.Block>
          ) : null}
          {children ? (
            <El.Block text="sb" size="md" color="#text">
              {children}
            </El.Block>
          ) : null}
        </El.Block>
        {footerActions ? <El.Block>{footerActions}</El.Block> : null}
      </El.Pane>
      {closeAction || null}
    </El.Pane>
  );
}

export default Banner;
