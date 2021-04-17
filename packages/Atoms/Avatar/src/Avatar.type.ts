import { BaseProps } from './../../../numl';

export interface TAvatarIconProps extends BaseProps {
  username?: string;
  showIcon?: boolean;
}

export interface TAvatarProfileProps extends BaseProps {
  username?: string;
  subtitle?: string;
  showArrow?: boolean;
}
