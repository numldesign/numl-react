import T from 'prop-types';
import React from 'react';
import { Action } from '../../../Elements/Action';
import { TLinkProps } from './Link.type';

function Link(allProps: TLinkProps) {
  const { label, icon, ...otherProps } = allProps;

  return (
    <Action as="nu-link" text="n" {...otherProps}>
      {label}
      {icon && (typeof icon === 'string' ? <El.Icon name={icon} text="middle" /> : icon)}
    </Action>
  );
}

Link.propTypes = {
  to: T.string,
  label: T.string,
  icon: T.oneOfType([T.string, T.element]),
};

export default Link;
