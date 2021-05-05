import React from 'react';
import { TAvatarIconProps, TAvatarProfileProps } from './Avatar.type';
import { El } from '../../../Core';

const Avatar = function Avatar(allProps: any): JSX.Element {
  let {
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

  return (
    <El.Card
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
      <Avatar.Icon {...allProps}></Avatar.Icon>
      {username && !children ? <Avatar.Profile {...allProps}></Avatar.Profile> : null}

      {showArrow ? (
        <Avatar.DropDown toggle>
          <Avatar.Popup>Lorem Ipsum</Avatar.Popup>
        </Avatar.DropDown>
      ) : null}
    </El.Card>
  );
};

Avatar.Icon = function AvatarIcon(allProps: TAvatarIconProps): JSX.Element {
  let {
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

  return (
    <El.Circle display={display} content={content} items={items} padding={padding} border={border} {...otherProps}>
      {!showIcon && username ? (
        <El.Base size="lg" text="uppercase">
          {username.slice(0, 2)}
        </El.Base>
      ) : (
        <El.Icon size="lg" name={'person'} />
      )}
    </El.Circle>
  );
};

Avatar.Profile = function AvatarProfile(allProps: TAvatarProfileProps): JSX.Element {
  let { username, subtitle, ...otherProps } = allProps;

  return (
    <El.Block {...otherProps}>
      <El.Block> {username ? <El.Base size="md">{username}</El.Base> : null} </El.Block>
      <El.Block> {subtitle ? <El.Base size="sm">{subtitle}</El.Base> : null} </El.Block>
    </El.Block>
  );
};

Avatar.DropDown = function AvatarDropDown(props: any) {
  const { children, ...otherProps } = props;
  return (
    <El.DropdownIcon name="chevron-down-outline" {...otherProps}>
      {children}
    </El.DropdownIcon>
  );
};

Avatar.Popup = function AvatarPopup(props: any) {
  const { padding = '1x 0', flow = 'column', display = 'flex', children, ...otherProps } = props;
  return (
    <El.Popup use-menu display={display} padding={padding} flow={flow} {...otherProps}>
      {children}
    </El.Popup>
  );
};

export default Avatar;
