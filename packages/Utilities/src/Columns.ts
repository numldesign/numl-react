/**
 * Properties that are added in props
 */

type ColumnsUtilityProps = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

/**
 * Properties that are return form the Responsive utility
 */

type ColumnsUtilityReturnProps = {
  columns: string;
};

/**
 * This function is used to get responsive attribute,
 * to make site responsive
 * @param props
 * @returns
 */

const ColumnsUtility = (
  props: ColumnsUtilityProps
): ColumnsUtilityReturnProps => {
  const { xs = '', sm = '', md = '', lg = '', xl = '' } = props;
  let columns = '';
  if (xl && lg && md && sm && xs) {
    columns = `${xl}|${lg}|${md}|${sm}|${xs}`;
  } else if (xl && lg && md && sm && !xs) {
    columns = `${xl}|${lg}|${md}|${sm}|${sm}`;
  } else if (xl && lg && md && !sm && !xs) {
    columns = `${xl}|${lg}|${md}|${md}|${md}`;
  } else if (xl && lg && !md && !sm && !xs) {
    columns = `${xl}|${lg}|${lg}|${lg}|${lg}`;
  } else if (xl && !lg && !md && !sm && !xs) {
    columns = `${xl}|${xl}|${xl}|${xl}|${xl}`;
  } else if (!xl && lg && !md && !sm && !xs) {
    columns = `${lg}|${lg}|${lg}|${lg}|${lg}`;
  } else if (!xl && !lg && md && !sm && !xs) {
    columns = `${md}|${md}|${md}|${md}|${md}`;
  } else if (!xl && !lg && !md && sm && !xs) {
    columns = `${sm}|${sm}|${sm}|${sm}|${sm}`;
  } else {
    columns = `${xl}|${lg}|${md}|${sm}|${xs}`;
  }
  return { columns };
};

export { ColumnsUtility, ColumnsUtilityProps, ColumnsUtilityReturnProps };
