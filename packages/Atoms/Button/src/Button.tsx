import React from 'react';
import { ActionElement } from './../../../Components/Action';
import { TButtonGroupProps, TButtonProps } from './Button.type';

function Button(props: TButtonProps): JSX.Element {
  const {
    children,
    size = 0.9,
    showDropdown = false,
    theme = 'default',
    padding = '0.5 1 0.5 1',
    otherProps,
  } = props;
  return (
    <nu-btn
      size={size}
      theme={theme}
      toggle={false}
      color="#text"
      padding={padding}
      {...otherProps}
    >
      {children ? children : null}
      {showDropdown ? showDropdown : null}
    </nu-btn>
  );
}

Button.Label = function ButtonLabel(props: any) {
  const { children, ...otherProps } = props;
  return <nu-el {...otherProps}>{children}</nu-el>;
};

Button.Icon = function ButtonLabel(props: any) {
  const { children, ...otherProps } = props;
  return <nu-icon {...otherProps}>{children}</nu-icon>;
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
