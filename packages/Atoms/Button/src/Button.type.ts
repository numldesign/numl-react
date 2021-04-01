import { BaseProps } from '../../../Shared/NumlTypes';

export interface TButtonProps extends BaseProps {
  label?: string;
  fill?: string;
  theme?: any;
  padding?: any;
  size?: string;
  showDropdown?: any;
}

export interface TButtonGroupProps extends BaseProps {
  children?: any;
  flow?: any;
  groupRadius?: any;
}
