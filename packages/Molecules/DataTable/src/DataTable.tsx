import React from 'react';
import { El } from '../../../Core';
import { TDataTableProps } from './DataTable.type';

function DataTable(allProps: TDataTableProps) {
  const { headings, rows, width = '100%', height = '100%', totals, footerContent, ...otherProps } = allProps;

  let headingList = headings && headings.length ? [...headings] : [];
  let rowList = rows && rows.length ? [...rows] : [];
  let totalList = totals && totals.length ? [...totals] : [];

  return (
    <El.Block {...otherProps}>
      <El.Table width={width} height={height}>
        {headingList.length ? (
          <El.RowGroup>
            <El.Row>
              {headingList.map((header) => {
                return (
                  <El.ColumnHeader border="bottom" key={header}>
                    {header}
                  </El.ColumnHeader>
                );
              })}
            </El.Row>
          </El.RowGroup>
        ) : null}
        {totalList.length ? (
          <El.RowGroup fill="subtle">
            <El.Row>
              {totalList.map((total, index) => {
                return (
                  <El.Cell height="3" key={index}>
                    {total}
                  </El.Cell>
                );
              })}
            </El.Row>
          </El.RowGroup>
        ) : null}
        {rowList.length ? (
          <El.RowGroup>
            {rowList.map((row, rowIndex) => {
              return (
                <El.Row key={rowIndex}>
                  {row.map((rowData: any, index: any) => {
                    return (
                      <El.Cell height="3" key={index}>
                        {rowData}
                      </El.Cell>
                    );
                  })}
                </El.Row>
              );
            })}
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
