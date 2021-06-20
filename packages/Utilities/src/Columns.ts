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
  column: string;
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
  let column = '';
  if (xl && lg && md && sm && xs) {
    column = `${xl}|${lg}|${md}|${sm}|${xs}`;
  } else if (xl && lg && md && sm && !xs) {
    column = `${xl}|${lg}|${md}|${sm}|${sm}`;
  } else if (xl && lg && md && !sm && !xs) {
    column = `${xl}|${lg}|${md}|${md}|${md}`;
  } else if (xl && lg && !md && !sm && !xs) {
    column = `${xl}|${lg}|${lg}|${lg}|${lg}`;
  } else if (xl && !lg && !md && !sm && !xs) {
    column = `${xl}|${xl}|${xl}|${xl}|${xl}`;
  } else if (!xl && lg && !md && !sm && !xs) {
    column = `${lg}|${lg}|${lg}|${lg}|${lg}`;
  } else if (!xl && !lg && md && !sm && !xs) {
    column = `${md}|${md}|${md}|${md}|${md}`;
  } else if (!xl && !lg && !md && sm && !xs) {
    column = `${sm}|${sm}|${sm}|${sm}|${sm}`;
  } else if (!xl && !lg && !md && !sm && xs) {
    column = `${xs}|${xs}|${xs}|${xs}|${xs}`;
  } else {
    column = `${xl}|${lg}|${md}|${sm}|${xs}`;
  }
  return { column };
};

export { ColumnsUtility, ColumnsUtilityProps, ColumnsUtilityReturnProps };
