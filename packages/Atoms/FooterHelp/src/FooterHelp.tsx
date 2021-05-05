import T from 'prop-types';
import React from 'react';
import { TFooterHelp } from './FooterHelp.type';
import { El, Link } from './../../../Core';

function FooterHelp(allProps: TFooterHelp) {
  const { label, icon, link, linkLabel, ...otherProps } = allProps;
  return (
    <El.Block radius="4x" border="1bw" padding="2x" {...otherProps}>
      {typeof icon === 'string' ? <El.Icon name={icon} color="light" /> : icon}
      <El.Base padding="0 4px" color="light">
        {label}
      </El.Base>
      {typeof link === 'string' ? <Link to={link} label={linkLabel} icon="exit-outline" /> : link}
    </El.Block>
  );
}

FooterHelp.propTypes = {
  label: T.string,
  linkLabel: T.string,
  icon: T.oneOfType([T.string, T.element]),
  link: T.oneOfType([T.string, T.element]),
};

export default FooterHelp;
