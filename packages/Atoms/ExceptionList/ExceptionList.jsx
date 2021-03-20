import T from 'prop-types';
import React from 'react';
import { themeAttr } from '../../helpers';

export default function ExceptionList(allProps) {
  let { size, title, label, theme, icon, ...otherProps } = allProps;

  return (
    <nu-el
      size={size}
      theme={theme || themeAttr(allProps, true)}
      {...otherProps}
    >
      {typeof icon === 'string' ? <nu-icon name={icon} /> : icon}
      {title ? (
        <nu-el text="middle" padding="0.5x left">
          {title} -
        </nu-el>
      ) : null}
      <nu-el text="middle" padding="0.5x left">
        {label}
      </nu-el>
    </nu-el>
  );
}

ExceptionList.propTypes = {
  size: T.string,
  label: T.string,
  icon: T.oneOfType([T.string, T.element]),
  title: T.string,
};
