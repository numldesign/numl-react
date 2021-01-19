import React from 'react';
import ActionElement from './Action';

export default function Button(props) {
  return ActionElement({ as: 'nu-btn', ...props});
}

Button.propTypes = ActionElement.propTypes;
