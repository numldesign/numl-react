import React from 'react';
import { El } from '@numl-react/core';
import Icon from '../../Icon/src/Icon';

function Pagination(allProps: any): JSX.Element {
  const {
    flow = 'row',
    border = '0',
    label,
    fill = 'transparent',
    previous,
    next,
    ...otherProps
  } = allProps;

  return (
    <El.ButtonGroup
      flex
      fill={fill}
      border={border}
      items="center"
      flow={flow}
      group-radius={flow}
      {...otherProps}
    >
      {typeof previous === 'string' ? (
        <El.Button id="previous" border>
          <Icon name={previous} />
        </El.Button>
      ) : (
        <El.BaseElement border>{previous}</El.BaseElement>
      )}
      {label ? <El.Label padding="0 1x">{label}</El.Label> : null}
      {typeof next === 'string' ? (
        <El.Button id="next" border>
          <Icon name={next} />
        </El.Button>
      ) : (
        <El.BaseElement border>{next}</El.BaseElement>
      )}
    </El.ButtonGroup>
  );
}

export default Pagination;
