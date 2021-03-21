import T from 'prop-types';
import React from 'react';
import { ActionElement } from '../../Components/Action';
import { themeAttr } from '../../helpers';
import Icon from '../Icon/Icon';
import { TTagProps } from './Tag.type';

function Tag(allProps: TTagProps): JSX.Element {
  const { size = 'sm', label, deletable, theme, ...otherProps } = allProps;

  return (
    <nu-badge
      size={size}
      theme={theme || themeAttr(allProps)}
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
