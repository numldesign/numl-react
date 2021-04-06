import { BaseProps } from '../../../Shared/NumlTypes';

export interface TAccountConnectionProps extends BaseProps {
  username?: string;
  isConnected?: boolean;
  subtitle?: string;
  onConnectionChange?: any;
}
