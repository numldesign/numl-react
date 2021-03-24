import { BaseProps, screenSizes } from '../../../Shared/NumlTypes';

export interface TAvatarProps extends BaseProps {
  size?: screenSizes | string;
  fontSize?: screenSizes;
  showArrow?: boolean;
  username?: string;
  theme?: string;
}

export interface TAvatarProfileProps extends BaseProps {
  size?: screenSizes;
  username?: string;
  subtitle?: string;
  showArrow?: boolean;
  theme?: any;
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
