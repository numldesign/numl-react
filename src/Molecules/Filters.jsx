import React from 'react';

export default function Filters(allProps) {
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
