import React from 'react';
import { ActionElement } from './../../../Components/Action';
import { TButtonGroupProps } from './Button.type';

function Button(props): JSX.Element {
  const {
    children,
    size = 0.9,
    showDropdown,
    special,
    theme,
    fill = 'bg',
    padding = '0.5 1 0.5 1',
    otherProps,
  } = props;
  return (
    <nu-btn
      toggle
      inset="n :active[y]"
      mark="hover"
      size={size}
      theme={theme}
      special={special}
      color="text"
      use-focus
      fill={fill}
      padding={padding}
      outline="focus"
      {...otherProps}
    >
      {children ? children : null}
      {showDropdown ? showDropdown : null}
    </nu-btn>
  );
}
Button.Label = function ButtonLabel(props) {
  const { children, ...otherProps } = props;
  return <nu-el {...otherProps}>{children}</nu-el>;
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
