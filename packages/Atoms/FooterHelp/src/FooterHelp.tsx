import T from 'prop-types';
import React from 'react';
import { TFooterHelp } from './FooterHelp.type';
import { Block, Base, Link, Icon } from './../../../entry';

function FooterHelp(allProps: TFooterHelp) {
  const { label, icon, link, linkLabel, ...otherProps } = allProps;
  return (
    <Block radius="4x" border="1bw" padding="2x" {...otherProps}>
      {typeof icon === 'string' ? <Icon name={icon} /> : icon}
      <Base padding="0 4px">{label}</Base>
      {typeof link === 'string' ? <Link to={link} label={linkLabel} icon="exit-outline" /> : link}
    </Block>
  );
}

FooterHelp.propTypes = {
  label: T.string,
  linkLabel: T.string,
  icon: T.oneOfType([T.string, T.element]),
  link: T.oneOfType([T.string, T.element]),
};

export default FooterHelp;
