import React from 'react';
import * as El from '@numl-react/elements';

function Tag(allProps: any): JSX.Element {
  const { size = 'sm', label, deletable, theme, ...otherProps } = allProps;

  return (
    <El.Badge
      size={size}
      theme={theme}
      radius="left right"
      padding="0.5x 1x 0.5x 1x"
      space="50% 0"
      {...otherProps}
    >
      {label}
      {deletable ? (
        <El.Action>
          <El.Icon name="close-outline" />
        </El.Action>
      ) : null}
    </El.Badge>
  );
}

export default Tag;
