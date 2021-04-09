import React from 'react';

function Grid(props: any) {
  const { children, ...otherProps } = props;
  return <nu-grid {...otherProps}>{children}</nu-grid>;
}

Grid.Row = function (props: any) {
  const { row, children, ...otherProps } = props;
  return (
    <nu-el row={row} {...otherProps}>
      {children}
    </nu-el>
  );
};

Grid.Column = function (props: any) {
  const { column, children, ...otherProps } = props;
  return (
    <nu-el column={column} {...otherProps}>
      {children}
    </nu-el>
  );
};

export default Grid;
