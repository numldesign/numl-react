import { BaseProps } from './../../../Shared/NumlTypes';

export interface TRadioProps extends BaseProps {
  checked?: any;
  disabled?: any;
}

export interface TRadioGroupProps extends BaseProps {
  disabled?: any;
  children?: any;
  inline?: any;
  value?: any;
  onChange?: any;
}

export interface TRadioFieldProps extends BaseProps {
  checked?: any;
  disabled?: any;
  id?: any;
  value?: any;
  label?: any;
  children?: any;
}
