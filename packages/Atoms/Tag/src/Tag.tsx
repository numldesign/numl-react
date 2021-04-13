import T from 'prop-types';
import React from 'react';
import { ActionElement } from '../../../Elements/Action';
import { Icon } from '../../Icon';
import { TTagProps } from './Tag.type';

function Tag(allProps: TTagProps): JSX.Element {
  const { size = 'sm', label, deletable, theme, ...otherProps } = allProps;

  return (
    <nu-badge
      size={size}
      theme={theme}
      radius="left right"
      padding="0.5x 1x 0.5x 1x"
      space="50% 0"
      {...otherProps}
    >
      {label}
      {deletable ? (
        <ActionElement>
          <Icon name="close-outline" />
        </ActionElement>
      ) : null}
    </nu-badge>
  );
}

Tag.propTypes = {
  size: T.string,
  label: T.string,
  deletable: T.bool,
};

export default Tag;
