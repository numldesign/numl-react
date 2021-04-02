import React from 'react';
import Icon from '../../Icon/src/Icon';
import { TPaginationProps } from './Pagination.type';

function Pagination(allProps: TPaginationProps) {
  const { flow, label, previous, next, ...otherProps } = allProps;
  const isVertical = flow === 'column';

  return (
    <nu-btngroup
      flow={flow}
      group-radius={isVertical ? 'column' : 'row'}
      {...otherProps}
    >
      {typeof previous === 'string' ? (
        <nu-btn id="previous">
          <Icon name={previous} />
        </nu-btn>
      ) : (
        previous
      )}
      {label && !isVertical && (
        <nu-label
          display="flex"
          content="center"
          items="center"
          fill="transparent"
        >
          {label}
        </nu-label>
      )}
      {typeof next === 'string' ? (
        <nu-btn id="next">
          <Icon name={next} />
        </nu-btn>
      ) : (
        next
      )}
    </nu-btngroup>
  );
}

export default Pagination;
