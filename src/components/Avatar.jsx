import React from 'react';
import T from 'prop-types';
import { themeAttr } from '../helpers';

const iconSize = {
  xs: '2',
  sm: '4',
  md: '6',
  lg: '8',
  xl: '10',
};

const textSize = {
  xs: '1',
  sm: '2',
  md: '3',
  lg: '4',
  xl: '5',
};

export default function Avatar(allProps) {
  let { size = 'md', username, theme, ...otherProps } = allProps;

  const showDefaultAvatar = !!!username || null;

  return (
    <nu-circle
      theme={theme || themeAttr(allProps, true)}
      display="flex"
      content="center"
      items="center"
      color="#text-soft"
      fill=""
      size={`${iconSize[size]}x`}
      {...otherProps}
    >
      {showDefaultAvatar && (
        <nu-icon size={`${iconSize[size]}x`} name="person-circle-outline" />
      )}
      {!showDefaultAvatar ? (
        <nu-label text="up" size={`${textSize[size]}x`}>
          {username?.slice(0, 2)}
        </nu-label>
      ) : null}
    </nu-circle>
  );
}

Avatar.Profile = function AvatarProfile(allProps) {
  let {
    size = 'md',
    username,
    subtitle,
    showArrow,
    theme,
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
      <Avatar {...allProps} />
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
          size={`${textSize[size]}x`}
          name="chevron-down-outline"
          color="#text"
        />
      ) : null}
    </nu-card>
  );
};

Avatar.propTypes = {
  showArrow: T.bool,
  size: T.string,
  username: T.string,
  subtitle: T.string,
};
