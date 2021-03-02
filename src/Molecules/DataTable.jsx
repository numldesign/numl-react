import React from 'react';

export default function DataTable(allProps) {
  const { headings, rows, totals, footerContent, ...otherProps } = allProps;

  let headingList = headings && headings.length ? [...headings] : [];
  let rowList = rows && rows.length ? [...rows] : [];
  let totalList = totals && totals.length ? [...totals] : [];

  return (
    <nu-block {...otherProps}>
      <nu-table width="100%">
        <nu-attrs for="cell" height="3"></nu-attrs>
        <nu-attrs for="columnheader" border="bottom"></nu-attrs>
        {headingList.length ? (
          <nu-rowgroup>
            <nu-row>
              {headingList.map((header) => {
                return <nu-columnheader key={header}>{header}</nu-columnheader>;
              })}
            </nu-row>
          </nu-rowgroup>
        ) : null}
        {totalList.length ? (
          <nu-rowgroup fill="subtle">
            <nu-row>
              {totalList.map((total, index) => {
                return <nu-cell key={index}>{total}</nu-cell>;
              })}
            </nu-row>
          </nu-rowgroup>
        ) : null}
        {rowList.length ? (
          <nu-rowgroup>
            {rowList.map((row, rowIndex) => {
              return (
                <nu-row key={rowIndex}>
                  {row.map((rowData, index) => {
                    return <nu-cell key={index}>{rowData}</nu-cell>;
                  })}
                </nu-row>
              );
            })}
          </nu-rowgroup>
        ) : null}
      </nu-table>
      <nu-pane height="3" content="center" fill="subtle">
        {footerContent}
      </nu-pane>
    </nu-block>
  );
}
