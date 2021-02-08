import ActionElement from './Action';

export default function Switchtoggle(allProps) {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return ActionElement({ as: 'nu-switch', checked, disabled, ...otherProps });
}

Switchtoggle.propTypes = ActionElement.propTypes;
