import T from 'prop-types';
import React from 'react';

function ProgressBar(allProps: any) {
  return <nu-progressbar {...allProps} />;
}

ProgressBar.propTypes = {
  size: T.string,
};

export default ProgressBar;
