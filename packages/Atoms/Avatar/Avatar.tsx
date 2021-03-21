import PropTypes from 'prop-types';
import React from 'react';
import { themeAttr } from '../../helpers.js';
import { screenSizes } from '../../Shared/NumlTypes.js';
import {
  AvatarIconSize,
  AvatarTextSize,
  TAvatarProfileProps,
  TAvatarProps,
} from './Avatar.type';

function Avatar(allProps: TAvatarProps): JSX.Element {
  let { size = screenSizes.MD, username, theme, ...otherProps } = allProps;

  const showDefaultAvatar = !!!username || null;

  return (
    <nu-circle
      theme={theme || themeAttr(allProps, true)}
      display="flex"
      content="center"
      items="center"
      color="#text-soft"
      fill=""
      size={`${AvatarIconSize[size]}x`}
      {...otherProps}
    >
      {showDefaultAvatar && (
        <nu-icon
          size={`${AvatarIconSize[size]}x`}
          name="person-circle-outline"
        />
      )}
      {!showDefaultAvatar ? (
        <nu-label text="up" size={`${AvatarTextSize[size]}x`}>
          {username?.slice(0, 2)}
        </nu-label>
      ) : null}
    </nu-circle>
  );
}

Avatar.Profile = function AvatarProfile(
  allProps: TAvatarProfileProps
): JSX.Element {
  let {
    size = screenSizes.MD,
    username,
    subtitle,
    showArrow,
    theme,
    children,
    ...otherProps
  } = allProps;
  return (
    <nu-card
      display="flex"
      content="center stretch"
      items="center stretch"
      flow="row"
      gap="1x"
      padding="1x"
      fill=""
      theme={theme || themeAttr(allProps, true)}
      {...otherProps}
    >
      {children}
      <nu-block grow="1">
        {username ? (
          <nu-block color="#text" size={size}>
            {username}
          </nu-block>
        ) : null}
        {subtitle ? (
          <nu-block
            color="#text-soft"
            size={`(@${size}-font-size - 2px) (@${size}-line-height - 2px)`}
          >
            {subtitle}
          </nu-block>
        ) : null}
      </nu-block>

      {showArrow ? (
        <nu-icon
          size={`${AvatarTextSize[size]}x`}
          name="chevron-down-outline"
          color="#text"
        />
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
