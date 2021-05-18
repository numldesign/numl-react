import React from 'react';
import { El } from '@numl-react/core';
import Icon from '../../Icon/src/Icon';

function Pagination(allProps: any): JSX.Element {
  const { flow, label, previous, next, ...otherProps } = allProps;
  const isVertical = flow === 'column';

  return (
    <El.ButtonGroup
      flow={flow}
      group-radius={isVertical ? 'column' : 'row'}
      {...otherProps}
    >
      {typeof previous === 'string' ? (
        <El.Button id="previous">
          <Icon name={previous} />
        </El.Button>
      ) : (
        previous
      )}
      {label && !isVertical && <El.Label>{label}</El.Label>}
      {typeof next === 'string' ? (
        <El.Button id="next">
          <Icon name={next} />
        </El.Button>
      ) : (
        next
      )}
    </El.ButtonGroup>
  );
}

export default Pagination;
