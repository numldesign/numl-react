import React from 'react';
import * as El from '@numl-react/elements';
import { isExist } from '../../../Utilities/src/Object';

function Button(props: any): JSX.Element {
  const {
    children = undefined,
    type = 'medium',
    icon = undefined,
    menu = undefined,
    selectable = false,
    color = 'text',
    dropdownIcon = true,
    theme,
    onTap,
    ...otherProps
  } = props;

  let size;
  let padding;
  if (type === 'small') {
    size = 'sm';
    padding = '1x 2x';
  } else if (type === 'medium') {
    size = 'md';
    padding = '1.5x 2.5x';
  } else if (type === 'large') {
    size = 'lg';
    padding = '2x 3x';
  } else if (type === 'extralarge') {
    size = 'xl';
    padding = '2x 4x';
  }

  return (
    <El.Button
      block
      outline="n"
      theme={theme}
      size={size}
      color={color}
      selectable={selectable}
      padding={padding}
      onTap={onTap}
      {...otherProps}
    >
      {icon && typeof icon === 'string' ? (
        <Button.Icon padding="0" name={icon} theme={theme} color={color} />
      ) : (
        icon
      )}
      {children}
      {isExist(menu) &&
      (typeof menu === 'object' || typeof menu === 'string') ? (
        <>
          {dropdownIcon &&
          (dropdownIcon === 'true' || dropdownIcon === true) ? (
            <El.DropdownIcon theme={theme} color={color} />
          ) : null}
          <Button.Popup use-menu size={size} theme={theme} color={color}>
            {menu}
          </Button.Popup>
        </>
      ) : null}
    </El.Button>
  );
}

Button.Small = (props: any) => {
  const {
    children = null,
    size = 'sm',
    padding = '0.75x 2x',
    ...otherProps
  } = props;

  return (
    <Button padding={padding} size={size} {...otherProps}>
      {children}
    </Button>
  );
};

Button.Medium = (props: any) => {
  const {
    children = null,
    size = 'md',
    padding = '1.5x 2.5x',
    ...otherProps
  } = props;

  return (
    <Button padding={padding} size={size} {...otherProps}>
      {children}
    </Button>
  );
};

Button.Large = (props: any) => {
  const {
    children = null,
    size = 'lg',
    padding = '2x 3x',
    ...otherProps
  } = props;

  return (
    <Button padding={padding} size={size} {...otherProps}>
      {children}
    </Button>
  );
};
Button.ExtraLarge = (props: any) => {
  const {
    children = null,
    size = 'xl',
    padding = '2x 4x',
    ...otherProps
  } = props;

  return (
    <Button padding={padding} size={size} {...otherProps}>
      {children}
    </Button>
  );
};

Button.Label = function ButtonLabel(props: any) {
  const { children, color = '#text', ...otherProps } = props;
  return (
    <El.Label color={color} {...otherProps}>
      {children}
    </El.Label>
  );
};

Button.Icon = function ButtonIcon(props: any) {
  const {
    children,
    padding = '0 0.5x',
    color = '#text',
    ...otherProps
  } = props;
  return (
    <El.Icon color={color} padding={padding} {...otherProps}>
      {children}
    </El.Icon>
  );
};

Button.Popup = function ButtonDropDownPopup(props: any) {
  const { children, ...otherProps } = props;
  return (
    <El.Popup use-menu block {...otherProps}>
      {children}
    </El.Popup>
  );
};

Button.Item = function ButtonDropDownPopupList(props: any) {
  const { children, width = '100%', outline = 'n', ...otherProps } = props;
  return (
    <El.Menuitem width={width} outline={outline} {...otherProps}>
      {children}
    </El.Menuitem>
  );
};

Button.Checkbox = function ButtonCheckbox(props: any) {
  const { children, padding = '0', ...otherProps } = props;
  return (
    <El.Checkbox padding={padding} {...otherProps}>
      {children}
    </El.Checkbox>
  );
};

Button.Group = function ButtonGroup(allProps: any): JSX.Element {
  const { children, ...otherProps } = allProps;
  return (
    <El.Flex flow="row" fill="transparent" gap {...otherProps}>
      {children}
    </El.Flex>
  );
};

Button.SegmentedGroup = function ButtonGroup(allProps: any): JSX.Element {
  const { children, ...otherProps } = allProps;
  return <El.ButtonGroup {...otherProps}>{children}</El.ButtonGroup>;
};

export default Button;
