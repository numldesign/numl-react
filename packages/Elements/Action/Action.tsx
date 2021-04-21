import T from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { NativeLink } from '../NativeLink';
import { TActionProps } from './Action.type';

const ROLE_MAP: any = {
  'nu-btn': 'button',
  'nu-link': 'link',
  'nu-cardbtn': 'button',
  'nu-checkbox': 'checkbox',
  'nu-switch': 'switch',
  'nu-radio': 'radio',
};

function ActionElement(allProps: TActionProps): JSX.Element {
  let { as, onTap, onInput, to, children, label, ...otherProps } = allProps;
  const Tag = as || 'nu-action';
  const ref: any = useRef();

  useEffect(() => {
    if (ref.current) {
      if (onTap) {
        ref.current.addEventListener('tap', onTap);
      }

      if (onInput) {
        ref.current.addEventListener('input', (evt: any) => onInput(evt.detail));
      }
    }
  }, []);

  return (
    <Tag ref={ref} role={!to ? ROLE_MAP[as] || 'button' : null} to={to} label={label} {...otherProps}>
      {children}
      {NativeLink({ to, label, children })}
    </Tag>
  );
}

ActionElement.propTypes = {
  onTap: T.func,
  to: T.string,
};

export default ActionElement;
