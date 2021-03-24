import React from 'react';
import { ActionElement } from './../../../Components/Action';
import { TButtonGroupProps, TButtonProps } from './Button.type';

function Button(otherProps: TButtonProps): JSX.Element {
  return ActionElement({ as: 'nu-btn', ...otherProps });
}

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
