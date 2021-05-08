import React from 'react';
import { El } from '@numl-react/core';

function ExceptionList(allProps: any) {
  let { items, ...otherProps } = allProps;

  return (
    <El.BaseElement {...otherProps}>
      {typeof items == 'object' && items.length > 0
        ? items.map((eachItem: any, index: any) => {
            return (
              <El.Grid gap columns="auto auto auto auto" key={index}>
                {typeof eachItem.icon == 'string' ? <El.Icon name={eachItem.icon} /> : eachItem.icon}
                <El.BaseElement text="middle">{eachItem.title}</El.BaseElement>-
                <El.BaseElement text="middle">{eachItem.label}</El.BaseElement>
              </El.Grid>
            );
          })
        : null}
    </El.BaseElement>
  );
}

export default ExceptionList;
