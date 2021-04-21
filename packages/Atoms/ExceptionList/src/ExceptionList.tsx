import React from 'react';
import { TExceptionListProps } from './ExceptionList.type';

function ExceptionList(allProps: TExceptionListProps) {
  let { items, ...otherProps } = allProps;

  return (
    <nu-el {...otherProps}>
      {typeof items == 'object' && items.length > 0
        ? items.map((eachItem: any, index: any) => {
            return (
              <nu-grid gap columns="auto auto auto auto" key={index}>
                {typeof eachItem.icon == 'string' ? <nu-icon name={eachItem.icon} /> : eachItem.icon}
                <nu-el text="middle">{eachItem.title}</nu-el>-<nu-el text="middle">{eachItem.label}</nu-el>
              </nu-grid>
            );
          })
        : null}
    </nu-el>
  );
}

export default ExceptionList;
