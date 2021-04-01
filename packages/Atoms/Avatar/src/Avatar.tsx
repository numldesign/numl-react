import PropTypes from 'prop-types';
import React from 'react';
import { TAvatarProfileProps, TAvatarProps } from './Avatar.type';

const Avatar = function Avatar(allProps: TAvatarProps): JSX.Element {
  let {
    size = 3,
    username,
    showIcon,
    fill,
    children,
    ...otherProps
  } = allProps;
  let childSize = size;
  if (childSize && !isNaN(+childSize)) {
    childSize = +size - +size / 3;
  }
  return (
    <nu-circle
      display="flex"
      content="center"
      items="center"
      fill={fill}
      border="0"
      size={size}
      {...otherProps}
    >
      {!showIcon && username ? (
        <nu-el size={childSize} text="uppercase">
          {username.slice(0, 2)}
        </nu-el>
      ) : (
        <nu-icon size={childSize} name={'person'} />
      )}
    </nu-circle>
  );
};

Avatar.Profile = function AvatarProfile(
  allProps: TAvatarProfileProps
): JSX.Element {
  let {
    size = 1,
    username,
    subtitle,
    fill,
    children,
    showArrow,
    ...otherProps
  } = allProps;

  let childSize = size;
  if (childSize && !isNaN(+childSize)) {
    childSize = +size / 2;
  }
  return (
    <nu-card
      display="flex"
      content="center stretch"
      items="center stretch"
      flow="row"
      gap="1x"
      cursor="pointer"
      padding="1x"
      fill={fill}
      {...otherProps}
    >
      {children}
      <nu-block grow="1">
        {username ? (
          <nu-block color="#text" size={childSize}>
            {username}
          </nu-block>
        ) : null}
        {subtitle ? (
          <nu-block color="#text-soft" size={childSize}>
            {subtitle}
          </nu-block>
        ) : null}
      </nu-block>

      {showArrow ? (
        <nu-icon size={childSize} name="chevron-down-outline" color="#text" />
      ) : null}
    </nu-card>
  );
};

Avatar.propTypes = {
  showArrow: PropTypes.bool,
  size: PropTypes.string,
  username: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Avatar;
