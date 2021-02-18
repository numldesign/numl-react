import T from 'prop-types';

export default function Link(allProps) {
  const { label, icon, ...otherProps } = allProps;

  return (
    <nu-link text="n" {...otherProps}>
      {label}
      {icon &&
        (typeof icon === 'string' ? (
          <nu-icon name={icon} text="middle" />
        ) : (
          icon
        ))}
    </nu-link>
  );
}

Link.propTypes = {
  to: T.string,
  label: T.string,
  icon: T.oneOfType([T.string, T.element]),
};
