import T from 'prop-types';
import React from 'react';
import { TIconProps } from './Icon.type';

function Icon(otherProps: TIconProps) {
  return <El.Icon {...otherProps} />;
}

Icon.propTypes = {
  name: T.string,
};

export default Icon;
