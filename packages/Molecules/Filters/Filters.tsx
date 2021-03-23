import React from 'react';
import { TFiltersProps } from './Filters.type';

function Filters(allProps: TFiltersProps): JSX.Element {
  const {
    filterSearch,
    filterGroup,
    extra,
    responsive,
    ...otherProps
  } = allProps;
  return (
    <nu-block responsive={responsive}>
      <nu-grid gap {...otherProps}>
        {filterSearch}
        {filterGroup}
        {extra}
      </nu-grid>
    </nu-block>
  );
}

export default Filters;