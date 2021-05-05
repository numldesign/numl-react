import React from 'react';
import { TFiltersProps } from './Filters.type';

function Filters(allProps: TFiltersProps): JSX.Element {
  const { filterSearch, filterGroup, extra, responsive, ...otherProps } = allProps;
  return (
    <El.Block responsive={responsive}>
      <nu-grid gap {...otherProps}>
        {filterSearch}
        {filterGroup}
        {extra}
      </nu-grid>
    </El.Block>
  );
}

export default Filters;
