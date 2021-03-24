import { BaseProps } from '../../../Shared/NumlTypes';
export interface TTabsProps extends BaseProps {
  prefix?: any;
  defaultValue?: any;
  onChange?: any;
  children?: any;
}
export interface TTabItemProps extends BaseProps {
  label?: any;
  tab?: any;
  prefix?: any;
  suffix?: any;
}
