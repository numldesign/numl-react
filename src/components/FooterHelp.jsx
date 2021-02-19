import T from 'prop-types';

import Icon from './Icon';
import Link from './Link';

export default function FooterHelp(allProps) {
  const { label, icon, link, linkLabel, ...otherProps } = allProps;
  return (
    <nu-block radius="4x" border="1bw" padding="2x" {...otherProps}>
      {typeof icon === 'string' ? <Icon name={icon} /> : icon}
      <nu-el padding="0 4px">{label}</nu-el>
      {typeof link === 'string' ? (
        <Link to={link} label={linkLabel} icon="exit-outline" />
      ) : (
        link
      )}
    </nu-block>
  );
}

FooterHelp.propTypes = {
  label: T.string,
  linkLabel: T.string,
  icon: T.oneOfType([T.string, T.element]),
  link: T.oneOfType([T.string, T.element]),
};
