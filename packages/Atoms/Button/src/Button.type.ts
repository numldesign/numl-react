import { BaseProps } from '../../../Shared/NumlTypes';

export interface TButtonProps extends BaseProps {
  label?: string;
}

export interface TButtonGroupProps extends BaseProps {
  children?: any;
  flow?: any;
  groupRadius?: any;
}
