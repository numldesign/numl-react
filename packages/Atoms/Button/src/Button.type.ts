import { BaseProps } from '../../../Shared/NumlTypes';

export interface TButtonProps extends BaseProps {
  label?: string;
  showDropdown?: any;
}

export interface TButtonGroupProps extends BaseProps {
  children?: any;
  flow?: any;
  groupRadius?: any;
}
