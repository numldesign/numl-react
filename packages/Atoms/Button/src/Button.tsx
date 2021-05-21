import React from 'react';
import { El } from '@numl-react/core';

function Button(props: any): JSX.Element {
  const {
    children,
    size = 'md',
    padding = '1.5x 2.5x',
    selectable = false,
    theme = 'default',
    onClick,
    ...otherProps
  } = props;
  return (
    <El.Button
      block
      theme={theme}
      size={size}
      selectable={selectable}
      padding={padding}
      onClick={onClick}
      {...otherProps}
    >
      {children || null}
    </El.Button>
  );
}

Button.Small = ({
  children = null,
  size = 'sm',
  padding = '0.75x 2x',
  ...props
}) => (
  <Button padding={padding} size={size} {...props}>
    {children}
  </Button>
);
Button.Medium = ({
  children = null,
  size = 'md',
  padding = '1.5x 2.5x',
  ...props
}) => (
  <Button padding={padding} size={size} {...props}>
    {children}
  </Button>
);
Button.Large = ({
  children = null,
  size = 'lg',
  padding = '2x 3x',
  ...props
}) => (
  <Button padding={padding} size={size} {...props}>
    {children}
  </Button>
);
Button.ExtraLarge = ({
  children = null,
  size = 'xl',
  padding = '2x 4x',
  ...props
}) => (
  <Button padding={padding} size={size} {...props}>
    {children}
  </Button>
);

Button.Label = function ButtonLabel(props: any) {
  const { children, color = '#text', ...otherProps } = props;
  return (
    <El.BaseElement color={color} {...otherProps}>
      {children}
    </El.BaseElement>
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
  const { children, ...otherProps } = props;
  return <El.Menuitem {...otherProps}>{children}</El.Menuitem>;
};

Button.Checkbox = function ButtonCheckbox(props: any) {
  const { children, padding = '0', ...otherProps } = props;
  return (
    <El.Checkbox padding={padding} {...otherProps}>
      {children}
    </El.Checkbox>
  );
};

Button.Dropdown = function ButtonDropdown(props: any): JSX.Element {
  const {
    children,
    label,
    theme,
    icon,
    type = 'medium',
    ...otherProps
  } = props;
  let size = '';
  let padding = '';
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
  } else {
    size = 'md';
    padding = '1.5x 2.5x';
  }
  return (
    <Button {...otherProps} size={size} padding={padding}>
      {icon && typeof icon === 'string' ? <Button.Icon name={icon} /> : icon}
      {label && typeof label === 'string' ? (
        <Button.Label>{label}</Button.Label>
      ) : (
        { label }
      )}
      <El.DropdownIcon theme={theme} />
      <Button.Popup size={size}>{children}</Button.Popup>
    </Button>
  );
};
(Button.Dropdown as React.FC).displayName = 'ButtonDropdown';

Button.Group = function ButtonGroup(allProps: any): JSX.Element {
  const { children, ...otherProps } = allProps;
  const { flow, groupRadius } = otherProps;

  const xflow = flow || 'row';
  const xgroupRadius =
    groupRadius || (flow && flow.includes('column') ? '1r column' : '1r row');

  return (
    <El.ButtonGroup
      flow={xflow}
      group-radius={xgroupRadius}
      border="#clear"
      {...otherProps}
    >
      {children}
    </El.ButtonGroup>
  );
};

export default Button;
