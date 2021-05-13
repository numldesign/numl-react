import React from 'react';
import { El } from '@numl-react/core';

function Filters(allProps: any): JSX.Element {
  const { filterSearch, filterGroup, extra, responsive, ...otherProps } =
    allProps;
  return (
    <El.Block responsive={responsive}>
      <El.Grid gap {...otherProps}>
        {filterSearch}
        {filterGroup}
        {extra}
      </El.Grid>
    </El.Block>
  );
}

export default Filters;
