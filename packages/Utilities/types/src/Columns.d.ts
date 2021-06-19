/**
 * Properties that are added in props
 */
declare type ColumnsUtilityProps = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
/**
 * Properties that are return form the Responsive utility
 */
declare type ColumnsUtilityReturnProps = {
  columns: string;
};
/**
 * This function is used to get responsive attribute,
 * to make site responsive
 * @param props
 * @returns
 */
declare const ColumnsUtility: (
  props: ColumnsUtilityProps
) => ColumnsUtilityReturnProps;
export { ColumnsUtility, ColumnsUtilityProps, ColumnsUtilityReturnProps };
