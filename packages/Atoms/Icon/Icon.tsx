import T from 'prop-types';
import React from 'react';

function Icon(otherProps: object) {
  return <nu-icon {...otherProps} />;
}

Icon.propTypes = {
  name: T.string,
};

export default Icon;