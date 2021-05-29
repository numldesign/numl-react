import React from 'react';
import { El } from '@numl-react/core';

function Filters(allProps: any): JSX.Element {
  const { filterSearch, filterGroup, extra, ...otherProps } = allProps;
  return (
    <El.Flex flex gap {...otherProps}>
      {filterSearch || null}
      {filterGroup || null}
      {extra || null}
    </El.Flex>
  );
}

export default Filters;
