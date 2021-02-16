import T from 'prop-types';
import { themeAttr } from '../helpers';

export default function Badge(allProps) {
  const { size = 'sm', label, icon, theme, ...otherProps } = allProps;
  return (
    <nu-badge
      size={size}
      theme={theme || themeAttr(allProps)}
      radius="4x"
      padding="0.5x 1x 0.5x 1x"
      {...otherProps}
    >
      {typeof icon === 'string' ? <nu-icon name={icon} /> : icon}
      {label}
    </nu-badge>
  );
}

Badge.propTypes = {
  size: T.string,
  label: T.string,
  icon: T.oneOfType([T.string, T.element]),
};
