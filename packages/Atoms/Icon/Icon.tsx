import T from 'prop-types';
import React from 'react';

export default function Icon(allProps: any) {
  return <nu-icon {...allProps} />;
}

Icon.propTypes = {
  name: T.string,
};
