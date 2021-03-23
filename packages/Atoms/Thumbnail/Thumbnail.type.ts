import { screenSizes } from '../../Shared/NumlTypes';
import { BaseProps } from './../../index.d';

export interface TThumbnailProps extends BaseProps {
  size: screenSizes;
  source: any;
  alt: any;
  fit: any;
}
