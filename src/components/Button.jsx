import React from 'react';
import { themeAttr } from '../helpers';
import ActionElement from './Action';

export default function Button(props) {
  return ActionElement({ as: 'nu-btn', ...props });
}

Button.Group = function ButtonGroup(allProps) {
  let { children, theme, ...props } = allProps;

  return (
    <nu-btngroup
      use-radiogroup="no" theme={theme || themeAttr(allProps, true)} group-radius="1r"
      border="#clear" flow="column :inline[row]" {...props}>
      {children}
    </nu-btngroup>
  );
};

Button.propTypes = ActionElement.propTypes;
