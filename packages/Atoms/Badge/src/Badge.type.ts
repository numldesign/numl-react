import { BaseProps, screenSizes } from '../../../Shared/NumlTypes';

export interface TBadgeProps extends BaseProps {
  size: screenSizes;
  label: string;
  icon: any;
  theme: any;
}
