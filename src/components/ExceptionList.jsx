import React from 'react';
import T from 'prop-types';
import { themeAttr } from '../helpers';

export default function ExceptionList(allProps) {
  let { size, title, label, theme, iconName, ...otherProps } = allProps;

  return (
    <nu-el
      size={size}
      theme={theme || themeAttr(allProps, true)}
      {...otherProps}
    >
      {iconName ? <nu-icon name={iconName} {...otherProps} /> : null}
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
  iconName: T.string,
  title: T.string,
};
