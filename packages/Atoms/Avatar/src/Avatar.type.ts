import { BaseProps } from '../../../Shared/NumlTypes';

export interface TAvatarIconProps extends BaseProps {
  username?: string;
  showIcon?: boolean;
}

export interface TAvatarProfileProps extends BaseProps {
  username?: string;
  subtitle?: string;
  showArrow?: boolean;
}
