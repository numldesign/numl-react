
import { screenSizes } from '../../Shared/NumlTypes';
import { BaseProps } from './../../index.d';
export interface TBadgeProps extends BaseProps {
    size: screenSizes;
    label: string;
    icon: any;
    theme: any;
}