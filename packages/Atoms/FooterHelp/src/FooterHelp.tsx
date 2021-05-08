import { El } from '@numl-react/core';
import React from 'react';

function FooterHelp(allProps: any) {
  const { label, icon, link, linkLabel, ...otherProps } = allProps;
  return (
    <El.Block radius="4x" border="1bw" padding="2x" {...otherProps}>
      {typeof icon === 'string' ? <El.Icon name={icon} color="light" /> : icon}
      <El.BaseElement padding="0 4px" color="light">
        {label}
      </El.BaseElement>
      {typeof link === 'string' ? <El.Link to={link} label={linkLabel} icon="exit-outline" /> : link}
    </El.Block>
  );
}

export default FooterHelp;
