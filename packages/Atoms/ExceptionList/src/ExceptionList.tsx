import React from 'react';
import { El } from '@numl-react/core';

function ExceptionList(allProps: any): JSX.Element {
  const { items, padding = '1x', ...otherProps } = allProps;

  return (
    <El.BaseElement padding={padding} radius {...otherProps}>
      <El.Grid gap="1x" columns="auto">
        {typeof items === 'object' && items.length > 0
          ? items.map((eachItem: any) => (
              <El.Flex gap>
                {eachItem.icon && typeof eachItem.icon === 'string' ? (
                  <El.Icon padding="0" name={eachItem.icon} />
                ) : (
                  eachItem.icon
                )}
                {eachItem.title && typeof eachItem.title === 'string' ? (
                  <El.BaseElement text="middle">
                    {eachItem.title}
                  </El.BaseElement>
                ) : (
                  eachItem.title
                )}
                {eachItem.title ? '-' : null}
                {eachItem.label && typeof eachItem.label === 'string' ? (
                  <El.BaseElement text="middle">
                    {eachItem.label}
                  </El.BaseElement>
                ) : (
                  eachItem.label
                )}
              </El.Flex>
            ))
          : null}
      </El.Grid>
    </El.BaseElement>
  );
}

export default ExceptionList;
