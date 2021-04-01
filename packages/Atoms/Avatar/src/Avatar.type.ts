import { BaseProps } from '../../../Shared/NumlTypes';

export interface TAvatarProps extends BaseProps {
  size?: string | number;
  username?: string;
  fill?: string;
}

export interface TAvatarProfileProps extends BaseProps {
  size?: string | number;
  username?: string;
  subtitle?: string;
  showArrow?: boolean;
  fill?: any;
  radius?: any;
  border?: any;
  padding?: any;
  children?: any;
}

export const IconSize: any = {
  xs: '2',
  sm: '4',
  md: '6',
  lg: '8',
  xl: '10',
};

export const AvatarTextSize: any = {
  xs: '1',
  sm: '2',
  md: '3',
  lg: '4',
  xl: '5',
};
