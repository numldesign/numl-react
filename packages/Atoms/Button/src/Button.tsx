import React from 'react';
import { El } from '../../../Core';

function Button(props: any): JSX.Element {
  const {
    children,
    size = 'md',
    padding = '2x 2x',
    selectable = false,
    theme = 'default',
    height = '2x',
    onClick,
    ...otherProps
  } = props;
  return (
    <El.Button
      block
      height={height}
      theme={theme}
      size={size}
      selectable={selectable}
      padding={padding}
      onClick={onClick}
      {...otherProps}
    >
      {children ? children : null}
    </El.Button>
  );
}

Button.Small = ({ children = null, size = 'sm', padding = '2x 2x', ...props }) => {
  return (
    <Button padding={padding} size={size} {...props}>
      {children}
    </Button>
  );
};
Button.Medium = ({ children = null, size = 'md', padding = '2.5x 3x', ...props }) => {
  return (
    <Button padding={padding} size={size} {...props}>
      {children}
    </Button>
  );
};
Button.Large = ({ children = null, size = 'lg', padding = '3x 4x', ...props }) => {
  return (
    <Button padding={padding} size={size} {...props}>
      {children}
    </Button>
  );
};
Button.ExtraLarge = ({ children = null, size = 'xl', padding = '3.5x 5x', ...props }) => {
  return (
    <Button padding={padding} size={size} {...props}>
      {children}
    </Button>
  );
};

Button.Label = function ButtonLabel(props: any) {
  const { children, color = '#text', ...otherProps } = props;
  return (
    <El color={color} {...otherProps}>
      {children}
    </El>
  );
};

Button.Icon = function ButtonIcon(props: any) {
  const { children, padding = '0 0.5x', color = '#text', ...otherProps } = props;
  return (
    <El.Icon color={color} padding={padding} {...otherProps}>
      {children}
    </El.Icon>
  );
};

Button.DropDown = function ButtonDropDown(props: any) {
  const { children, color = '#text', ...otherProps } = props;
  return (
    <El.DropdownIcon color={color} {...otherProps}>
      {children}
    </El.DropdownIcon>
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
  const { children, ...otherProps } = props;
  return <El.Menuitem {...otherProps}>{children}</El.Menuitem>;
};

Button.Checkbox = function ButtonCheckbox(props: any) {
  const { children, padding = '0', ...otherProps } = props;
  return (
    <nu-checkbox padding={padding} {...otherProps}>
      {children}
    </nu-checkbox>
  );
};

Button.Group = function ButtonGroup(allProps: any): JSX.Element {
  let { children, flow, groupRadius, ...otherProps } = allProps;

  flow = flow || 'row';
  groupRadius = groupRadius || (flow && flow.includes('column') ? '1r column' : '1r row');

  return (
    <El.ButtonGroup flow={flow} group-radius={groupRadius} border="#clear" {...otherProps}>
      {children}
    </El.ButtonGroup>
  );
};

export default Button;
