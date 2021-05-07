import React from 'react';
import { El } from '@numl-react/core';
import { TTagProps } from './Tag.type';

function Tag(allProps: TTagProps): JSX.Element {
  const { size = 'sm', label, deletable, theme, ...otherProps } = allProps;

  return (
    <El.Badge size={size} theme={theme} radius="left right" padding="0.5x 1x 0.5x 1x" space="50% 0" {...otherProps}>
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
