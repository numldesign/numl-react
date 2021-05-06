import React from 'react';
import { El } from '../../../Core';
import { TFiltersProps } from './Filters.type';

function Filters(allProps: TFiltersProps): JSX.Element {
  const { filterSearch, filterGroup, extra, responsive, ...otherProps } = allProps;
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
