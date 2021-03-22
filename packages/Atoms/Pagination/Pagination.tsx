import T from 'prop-types';
import React from 'react';
import Icon from '../Icon/Icon';
import { TPaginationProps } from './Pagination.type';

function Pagination(allProps: TPaginationProps) {
  const { size = 'md', flow, label, previous, next, ...otherProps } = allProps;
  const isVertical = flow === 'column';

  return (
    <nu-btngroup
      size={size}
      flow={flow}
      group-radius={isVertical ? 'column' : 'row'}
      {...otherProps}
    >
      <nu-btn>
        {typeof previous === 'string' ? <Icon name={previous} /> : previous}
      </nu-btn>
      {label && !isVertical && (
        <nu-label display="flex" content="center" items="center">
          {label}
        </nu-label>
      )}
      <nu-btn>{typeof next === 'string' ? <Icon name={next} /> : next}</nu-btn>
    </nu-btngroup>
  );
}

Pagination.propTypes = {
  previous: T.oneOfType([T.string, T.element]),
  next: T.oneOfType([T.string, T.element]),
  label: T.string,
};

export default Pagination;