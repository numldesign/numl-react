import T from 'prop-types';
import ActionElement from './Action';

export default function Switch(allProps) {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return ActionElement({ as: 'nu-switch', checked, disabled, ...otherProps });
}

Switch.propTypes = {
  ...ActionElement.propTypes,
  checked: T.bool,
};
