import { BaseProps } from './../../index.d';

export interface TRadioProps extends BaseProps {
    checked?: any;
    disabled?: any;
}

export interface TRadioGroupProps extends BaseProps {
    disabled?: any;
    children?: any;
    inline?: any;
    onChange?: any;
}

export interface TRadioFieldProps extends BaseProps {
    checked?: any;
    disabled?: any;
    id?: any;
    label?: any;
    children?: any;
}

