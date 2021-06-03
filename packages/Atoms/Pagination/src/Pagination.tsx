import React from 'react';
import * as El from '@numl-react/elements';
import Icon from '../../Icon/src/Icon';
import Button from '../../Button/src/Button';

function Pagination(allProps: any): JSX.Element {
  const {
    flow = 'row',
    label,
    previous,
    type = 'medium',
    next,
    ...otherProps
  } = allProps;

  return (
    <Button.SegmentedGroup
      fill="transparent"
      flex
      items="stretch"
      flow={flow}
      {...otherProps}
    >
      {typeof previous === 'string' ? (
        <El.Button type={type} id="previous">
          <Icon name={previous} />
        </El.Button>
      ) : (
        <El.BaseElement>{previous}</El.BaseElement>
      )}
      {label ? (
        <El.Flex flex items="center" fill="bg">
          <El.Label padding="0 1x" color="text">
            {label}
          </El.Label>
        </El.Flex>
      ) : null}
      {typeof next === 'string' ? (
        <El.Button type={type} id="next">
          <Icon name={next} />
        </El.Button>
      ) : (
        <El.BaseElement>{next}</El.BaseElement>
      )}
    </Button.SegmentedGroup>
  );
}

export default Pagination;
