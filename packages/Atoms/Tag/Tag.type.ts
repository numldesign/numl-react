import { screenSizes } from '../../Shared/NumlTypes';
import { BaseProps } from './../../index.d';

export interface TTagProps extends BaseProps {
    size?: screenSizes;
    label?: any;
    deletable?: any;
    theme?: any;
}
