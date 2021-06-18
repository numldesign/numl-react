/* eslint-disable no-param-reassign */
import React from 'react';

const Grid = React.forwardRef((props: any, ref) => {
  const {
    columns = '',
    responsive = '',
    xs = (props.column = '1fr'),
    sm = (props.column = '1fr'),
    md = (props.column = '1fr'),
    lg = (props.column = '1fr'),
    xl = (props.column = '1fr'),
    children,
    ...otherProps
  } = props;
  const resp = ResponsiveUtility({
    columns,
    responsive,
    xs,
    sm,
    md,
    lg,
    xl,
  });
  return React.createElement(
    'nu-grid',
    {
      ...otherProps,
      ref,
      columns: resp.columns,
      responsive: resp.responsive,
    },
    [children]
  );
});

export default Grid;

function ResponsiveUtility({ columns, responsive, xs, sm, md, lg, xl }) {
  if (xl && lg && md && sm && xs) {
    columns = `${xs}|${sm}|${md}|${lg}|${xl}`;
  } else if (xl && lg && md && sm && !xs) {
    columns = `${sm}|${sm}|${md}|${lg}|${xl}`;
  } else if (xl && lg && md && !sm && !xs) {
    columns = `${md}|${md}|${md}|${lg}|${xl}`;
  } else if (xl && lg && !md && !sm && !xs) {
    columns = `${lg}|${lg}|${lg}|${lg}|${xl}`;
  } else if (xl && !lg && !md && !sm && !xs) {
    columns = `${xl}|${xl}|${xl}|${xl}|${xl}`;
  } else if (!xl && lg && !md && !sm && !xs) {
    columns = `${lg}|${lg}|${lg}|${lg}|${lg}`;
  } else if (!xl && !lg && md && !sm && !xs) {
    columns = `${md}|${md}|${md}|${md}|${md}`;
  } else if (!xl && !lg && !md && sm && !xs) {
    columns = `${sm}|${sm}|${sm}|${sm}|${sm}`;
  } else {
    columns = `${xs}|${sm}|${md}|${lg}|${xl}`;
  }

  const resp = JSON.parse(localStorage.getItem('responsive'));
  if (resp) {
    responsive = `${resp.xs}|${resp.sm}|${resp.md}|${resp.lg}|${resp.xl}`;
  } else {
    responsive = '576px|768px|992px|1200px|1800px';
  }

  return { responsive, columns };
}
