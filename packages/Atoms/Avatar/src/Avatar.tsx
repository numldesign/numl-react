import React from 'react';
import { El } from '@numl-react/core';

const Avatar = function Avatar(allProps: any): JSX.Element {
  const {
    username,
    subtitle,
    theme = 'default',
    children,
    fill,
    showIcon = true,
    showArrow = false,
    gap = '2x 1x',
    cursor = 'pointer',
    padding = '1x',
    ...otherProps
  } = allProps;

  return (
    <El.Button
      gap={gap}
      theme={theme}
      fill={fill}
      cursor={cursor}
      padding={padding}
      {...otherProps}
    >
      <El.Grid columns="auto auto" flow="row wrap">
        <Avatar.Profile
          column="1"
          gap={gap}
          fill={fill}
          username={username}
          subtitle={subtitle}
          showIcon={showIcon}
        />
        {showArrow ? (
          <>
            <El.Inline column="2">
              <El.DropdownIcon
                padding="0 1x"
                name="chevron-down-outline"
                fill={fill}
                theme={theme}
              />
              <Avatar.Popup>{children}</Avatar.Popup>
            </El.Inline>
          </>
        ) : null}
      </El.Grid>
    </El.Button>
  );
};

Avatar.Icon = function AvatarIcon(allProps: any): JSX.Element {
  const { username, showIcon = true, size, padding, ...otherProps } = allProps;

  // eslint-disable-next-line no-underscore-dangle
  let _size = '';
  // eslint-disable-next-line no-underscore-dangle
  let _padding = padding;

  if (size === 'sm') {
    _size = '4x';
    _padding = '0.5x';
  } else if (size === 'md') {
    _size = '5x';
    _padding = '1x';
  } else if (size === 'lg') {
    _size = '6x';
    _padding = '1.5x';
  } else {
    _size = '6x';
    _padding = '1.5x';
  }

  return (
    <El.Circle text="uppercase" size={_size} inline {...otherProps}>
      <El.AttributeProvider for="nu-el" size="special" />

      {(!showIcon || showIcon === 'false') && username ? (
        <El.BaseElement padding="1x" size="3x 4x">
          {username.slice(0, 2)}
        </El.BaseElement>
      ) : (
        <El.Icon padding={_padding} size="4x" sp name="person" />
      )}
    </El.Circle>
  );
};

Avatar.Profile = function AvatarProfile(allProps: any): JSX.Element {
  const { username, subtitle, showIcon, ...otherProps } = allProps;

  return (
    <El.Grid columns="auto auto" {...otherProps}>
      <Avatar.Icon username={username} showIcon={showIcon} />
      <El.BaseElement>
        <El.Block>
          {username ? (
            <El.BaseElement size="md">{username}</El.BaseElement>
          ) : null}
        </El.Block>
        <El.Block>
          {subtitle ? (
            <El.BaseElement size="sm">{subtitle}</El.BaseElement>
          ) : null}
        </El.Block>
      </El.BaseElement>
    </El.Grid>
  );
};

Avatar.Popup = function AvatarPopup(props: any) {
  const { children, ...otherProps } = props;
  return (
    <El.Popup use-menu {...otherProps}>
      {children}
    </El.Popup>
  );
};

export default Avatar;
