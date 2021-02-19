import T from 'prop-types';

import ActionElement from './Action';

export default function Link(allProps) {
  const { label, icon, ...otherProps } = allProps;

  return (
    <ActionElement as="nu-link" text="n" {...otherProps}>
      {label}
      {icon &&
        (typeof icon === 'string' ? (
          <nu-icon name={icon} text="middle" />
        ) : (
          icon
        ))}
    </ActionElement>
  );
}

Link.propTypes = {
  to: T.string,
  label: T.string,
  icon: T.oneOfType([T.string, T.element]),
};
