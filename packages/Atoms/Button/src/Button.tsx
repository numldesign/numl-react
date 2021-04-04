import React from 'react';
import { ActionElement } from './../../../Components/Action';
import { TButtonGroupProps, TButtonProps } from './Button.type';

function Button(props: TButtonProps): JSX.Element {
  const {
    children,
    size = 0.9,
    theme = 'default',
    padding = '0.5 1 0.5 1',
    otherProps,
  } = props;
  return (
    <nu-btn
      size={size}
      theme={theme}
      color="#text"
      selectable="false"
      padding={padding}
      {...otherProps}
    >
      {children ? children : null}
    </nu-btn>
  );
}

Button.Label = function ButtonLabel(props: any) {
  const { children, padding = '0.5', ...otherProps } = props;
  return (
    <nu-el padding={padding} {...otherProps}>
      {children}
    </nu-el>
  );
};

Button.Icon = function ButtonIcon(props: any) {
  const { children, ...otherProps } = props;
  return <nu-icon {...otherProps}>{children}</nu-icon>;
};

Button.DropDown = function ButtonDropDown(props: any) {
  const { children, ...otherProps } = props;
  return <nu-dropdownicon {...otherProps}>{children}</nu-dropdownicon>;
};

Button.Popup = function ButtonDropDownPopup(props: any) {
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

Button.Item = function ButtonDropDownPopupList(props: any) {
  const { children, ...otherProps } = props;
  return <nu-menuitem {...otherProps}>{children}</nu-menuitem>;
};

Button.Checkbox = function ButtonCheckbox(props: any) {
  const { children, ...otherProps } = props;
  return <nu-checkbox {...otherProps}>{children}</nu-checkbox>;
};

Button.Group = function ButtonGroup(allProps: TButtonGroupProps): JSX.Element {
  let { children, flow, groupRadius, ...otherProps } = allProps;

  flow = flow || 'row';
  groupRadius =
    groupRadius || (flow && flow.includes('column') ? '1r column' : '1r row');

  return (
    <nu-btngroup
      use-radiogroup="no"
      flow={flow}
      group-radius={groupRadius}
      border="#clear"
      {...otherProps}
    >
      {children}
    </nu-btngroup>
  );
};

Button.propTypes = ActionElement.propTypes;
export default Button;
