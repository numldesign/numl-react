import React from 'react';
import { El } from '@numl-react/core';

function DataTable(allProps: any) {
  const {
    headings,
    rows,
    width = '100%',
    height = '100%',
    totals,
    ...otherProps
  } = allProps;

  const headingList = headings && headings.length ? [...headings] : [];
  const rowList = rows && rows.length ? [...rows] : [];
  const totalList = totals && totals.length ? [...totals] : [];

  return (
    <El.Block {...otherProps}>
      <El.Table width={width} height={height}>
        {headingList.length ? (
          <El.RowGroup>
            <El.Row>
              {headingList.map((header) => (
                <El.ColumnHeader border="bottom" key={header}>
                  {header}
                </El.ColumnHeader>
              ))}
            </El.Row>
          </El.RowGroup>
        ) : null}
        {totalList.length ? (
          <El.RowGroup fill="subtle">
            <El.Row>
              {totalList.map((total) => (
                <El.Cell height="3">{total}</El.Cell>
              ))}
            </El.Row>
          </El.RowGroup>
        ) : null}
        {rowList.length ? (
          <El.RowGroup>
            {rowList.map((row) => (
              <El.Row>
                {row.map((rowData: any) => (
                  <El.Cell height="3">{rowData}</El.Cell>
                ))}
              </El.Row>
            ))}
          </El.RowGroup>
        ) : null}
      </El.Table>
      <El.Pane height="3" content="center" fill="subtle">
        Showing {rows.length} of {rows.length}
      </El.Pane>
    </El.Block>
  );
}

export default DataTable;
