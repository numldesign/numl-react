/**
 * Properties that are added in props
 */

type ResponsiveUtilityProps = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

/**
 * Properties that are return form the Responsive utility
 */

type ResponsiveUtilityReturnProps = {
  responsive: string;
};

/**
 * This function is used to get responsive attribute,
 * to make site responsive
 * @param props
 * @returns
 */

const ResponsiveUtility = (
  props: ResponsiveUtilityProps
): ResponsiveUtilityReturnProps => {
  const {
    xl = '1800px',
    lg = '1200px',
    md = '992px',
    sm = '768px',
    xs = '576px',
  } = props;

  const responsiveness = `${xl}|${lg}|${md}|${sm}|${xs}`;

  return { responsive: responsiveness };
};

export { ResponsiveUtility };
