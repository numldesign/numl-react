import T from 'prop-types';
import React from 'react';
import { ActionElement } from '../../../Elements/Action';
import { TLinkProps } from './Link.type';

function Link(allProps: TLinkProps) {
  const { label, icon, ...otherProps } = allProps;

  return (
    <ActionElement as="nu-link" text="n" {...otherProps}>
      {label}
      {icon && (typeof icon === 'string' ? <nu-icon name={icon} text="middle" /> : icon)}
    </ActionElement>
  );
}

Link.propTypes = {
  to: T.string,
  label: T.string,
  icon: T.oneOfType([T.string, T.element]),
};

export default Link;
