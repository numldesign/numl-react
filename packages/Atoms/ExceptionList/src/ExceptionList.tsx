import React from 'react';
import * as El from '@numl-react/elements';

function ExceptionList(allProps: any): JSX.Element {
  const { items, type = 'none', ...otherProps } = allProps;

  return (
    <El.List flex gap type={type} {...otherProps}>
      {typeof items === 'object' && items.length > 0
        ? items.map((eachItem: any) => (
            <El.Listitem flex flow="row" gap>
              {eachItem.icon && typeof eachItem.icon === 'string' ? (
                <El.Icon padding="0" name={eachItem.icon} />
              ) : (
                eachItem.icon
              )}
              {eachItem.title && typeof eachItem.title === 'string' ? (
                <El.BaseElement text="middle">{eachItem.title}</El.BaseElement>
              ) : (
                eachItem.title
              )}
              {eachItem.title ? (
                <El.BaseElement theme="default">-</El.BaseElement>
              ) : null}
              {eachItem.label && typeof eachItem.label === 'string' ? (
                <El.BaseElement text="middle" theme="default">
                  {eachItem.label}
                </El.BaseElement>
              ) : (
                eachItem.label
              )}
            </El.Listitem>
          ))
        : null}
    </El.List>
  );
}

export default ExceptionList;
