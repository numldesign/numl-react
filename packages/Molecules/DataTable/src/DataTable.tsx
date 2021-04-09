import React from 'react';
import { TDataTableProps } from './DataTable.type';

function DataTable(allProps: TDataTableProps) {
  const {
    headings,
    rows,
    width = '100%',
    height = '100%',
    totals,
    footerContent,
    ...otherProps
  } = allProps;

  let headingList = headings && headings.length ? [...headings] : [];
  let rowList = rows && rows.length ? [...rows] : [];
  let totalList = totals && totals.length ? [...totals] : [];

  return (
    <nu-block {...otherProps}>
      <nu-table width={width} height={height}>
        {headingList.length ? (
          <nu-rowgroup>
            <nu-row>
              {headingList.map((header) => {
                return (
                  <nu-columnheader border="bottom" key={header}>
                    {header}
                  </nu-columnheader>
                );
              })}
            </nu-row>
          </nu-rowgroup>
        ) : null}
        {totalList.length ? (
          <nu-rowgroup fill="subtle">
            <nu-row>
              {totalList.map((total, index) => {
                return (
                  <nu-cell height="3" key={index}>
                    {total}
                  </nu-cell>
                );
              })}
            </nu-row>
          </nu-rowgroup>
        ) : null}
        {rowList.length ? (
          <nu-rowgroup>
            {rowList.map((row, rowIndex) => {
              return (
                <nu-row key={rowIndex}>
                  {row.map((rowData: any, index: any) => {
                    return (
                      <nu-cell height="3" key={index}>
                        {rowData}
                      </nu-cell>
                    );
                  })}
                </nu-row>
              );
            })}
          </nu-rowgroup>
        ) : null}
      </nu-table>
      <nu-pane height="3" content="center" fill="subtle">
        Showing {rows.length} of {rows.length}
      </nu-pane>
    </nu-block>
  );
}

export default DataTable;
