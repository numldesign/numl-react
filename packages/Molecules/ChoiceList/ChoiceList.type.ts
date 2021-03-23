import { BaseProps } from '../..';
export interface TChoiceListProps extends BaseProps {
    heading?: any;
    choices?: any;
    selected?: any;
    onChange?: any;
    multiSelect?: any;
}

export interface TCheckChoiceListProps extends BaseProps {
    choiceList?: any;
    selected?: any;
    onChange?: any;
}

export interface TRadioChoiceListProps extends BaseProps {
    choiceList?: any;
    selected?: any;
    onChange?: any;
}

