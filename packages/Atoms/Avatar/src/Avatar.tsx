import React from 'react';
import { TAvatarIconProps, TAvatarProfileProps } from './Avatar.type';

const Avatar = function Avatar(allProps: any): JSX.Element {
  let {
    size = 1,
    username,
    subtitle,
    fill,
    children,
    showArrow = false,
    showIcon = false,
    display = 'flex',
    content = 'center stretch',
    items = 'center stretch',
    flow = 'row',
    gap = '1x',
    cursor = 'pointer',
    padding = '1x',
    ...otherProps
  } = allProps;

  let childSize = size;
  if (childSize && !isNaN(+childSize)) {
    childSize = +size / 2;
  }
  return (
    <nu-card
      display={display}
      content={content}
      items={items}
      flow={flow}
      gap={gap}
      toggle
      cursor={cursor}
      padding={padding}
      fill={fill}
      {...otherProps}
    >
      {children}
      {showIcon && showIcon != 'false' && !children ? (
        <Avatar.Icon {...allProps}></Avatar.Icon>
      ) : null}
      {(username || subtitle) && !children ? (
        <Avatar.Profile {...allProps}></Avatar.Profile>
      ) : null}

      {showArrow ? (
        <Avatar.DropDown toggle>
          <Avatar.Popup>uemr</Avatar.Popup>
        </Avatar.DropDown>
      ) : null}
    </nu-card>
  );
};

Avatar.Icon = function AvatarIcon(allProps: TAvatarIconProps): JSX.Element {
  let {
    size = 2,
    username,
    showIcon = true,
    border = '0.1',
    content = 'center',
    padding = '1',
    items = 'center',
    display = 'flex',
    children,
    ...otherProps
  } = allProps;
  let childSize = size;
  if (childSize && !isNaN(+childSize)) {
    childSize = +size - +size / 3;
  }

  return (
    <nu-circle
      display={display}
      content={content}
      items={items}
      padding={padding}
      border={border}
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
  let { size = 2, username, subtitle, ...otherProps } = allProps;

  let childSize = size;
  if (childSize && !isNaN(+childSize)) {
    childSize = +size / 2;
  }
  return (
    <nu-block grow="1" {...otherProps}>
      {username ? (
        <nu-block color="#text" size={childSize} padding="0.2">
          {username}
        </nu-block>
      ) : null}
      {subtitle ? (
        <nu-block color="#text-soft" size={childSize} padding="0.2">
          {subtitle}
        </nu-block>
      ) : null}
    </nu-block>
  );
};

Avatar.DropDown = function AvatarDropDown(props: any) {
  const { children, ...otherProps } = props;
  return <nu-dropdownicon {...otherProps}>{children}</nu-dropdownicon>;
};

Avatar.Popup = function AvatarPopup(props: any) {
  const {
    padding = '1x 0',
    flow = 'column',
    display = 'flex',
    children,
    ...otherProps
  } = props;
  return (
    <nu-popup
      use-menu
      display={display}
      padding={padding}
      flow={flow}
      {...otherProps}
    >
      {children}
    </nu-popup>
  );
};

export default Avatar;
