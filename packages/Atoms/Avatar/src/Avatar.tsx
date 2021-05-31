import React from 'react';
import * as El from '@numl-react/elements';

const Avatar = function Avatar(allProps: any): JSX.Element {
  const {
    username,
    subtitle,
    theme = 'default',
    children,
    fill,
    showIcon = true,
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
      <Avatar.Profile
        column="1"
        gap={gap}
        fill={fill}
        username={username}
        subtitle={subtitle}
        showIcon={showIcon}
      />
      {children && (
        <El.Inline>
          <El.DropdownIcon
            padding="0 1x"
            name="chevron-down-outline"
            fill={fill}
            theme={theme}
          />
          <Avatar.Popup>{children}</Avatar.Popup>
        </El.Inline>
      )}
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
  const { username, subtitle, showIcon, gap = '1x', ...otherProps } = allProps;

  return (
    <El.Flex
      columns="auto auto"
      responsive="781px|780px"
      items="center"
      gap={gap}
      {...otherProps}
    >
      <Avatar.Icon username={username} showIcon={showIcon} />
      <El.Flex flow="column" items="start center" hide="n|y">
        {username ? (
          <El.Block>
            {username ? (
              <El.BaseElement size="md">{username}</El.BaseElement>
            ) : null}
          </El.Block>
        ) : null}
        {subtitle ? (
          <El.Block>
            {subtitle ? (
              <El.BaseElement size="sm">{subtitle}</El.BaseElement>
            ) : null}
          </El.Block>
        ) : null}
      </El.Flex>
    </El.Flex>
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
