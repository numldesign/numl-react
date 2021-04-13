import { BaseProps } from '../../../NumlTypes';

export interface TAccountConnectionProps extends BaseProps {
  username?: string;
  isConnected?: boolean;
  subtitle?: string;
  onConnectionChange?: any;
}
