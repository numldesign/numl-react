import React from 'react';
import { themeAttr } from '../helpers';
import ActionElement from './Action';

export default function Button(props) {
  return ActionElement({ as: 'nu-btn', ...props });
}

Button.Group = function ButtonGroup(allProps) {
  let { children, flow, groupRadius, ...props } = allProps;

  flow = flow || 'row';
  groupRadius =
    groupRadius || (flow && flow.includes('column') ? '1r column' : '1r row');

  return (
    <nu-btngroup
      use-radiogroup="no"
      flow={flow}
      group-radius={groupRadius}
      border="#clear"
      {...props}
    >
      {children}
    </nu-btngroup>
  );
};

Button.propTypes = ActionElement.propTypes;
