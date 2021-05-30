import React from 'react';
import * as El from '@numl-react/elements';
import Icon from '../../Icon/src/Icon';
import Button from '../../Button/src/Button';

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
    <Button.Group
      flex
      fill={fill}
      border={border}
      items="center"
      flow={flow}
      group-radius={flow}
      {...otherProps}
    >
      {typeof previous === 'string' ? (
        <El.Button id="previous">
          <Icon name={previous} />
        </El.Button>
      ) : (
        <El.BaseElement>{previous}</El.BaseElement>
      )}
      {label ? <El.Label padding="0 1x">{label}</El.Label> : null}
      {typeof next === 'string' ? (
        <El.Button id="next">
          <Icon name={next} />
        </El.Button>
      ) : (
        <El.BaseElement>{next}</El.BaseElement>
      )}
    </Button.Group>
  );
}

export default Pagination;
