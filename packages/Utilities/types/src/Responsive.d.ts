/**
 * Properties that are added in props
 */
declare type ResponsiveUtilityProps = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
/**
 * Properties that are return form the Responsive utility
 */
declare type ResponsiveUtilityReturnProps = {
  responsive: string;
};
/**
 * This function is used to get responsive attribute,
 * to make site responsive
 * @param props
 * @returns
 */
declare const ResponsiveUtility: (
  props: ResponsiveUtilityProps
) => ResponsiveUtilityReturnProps;
export { ResponsiveUtility };
