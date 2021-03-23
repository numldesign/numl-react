import { BaseProps } from '../..';

export interface TSearchProps extends BaseProps {
  value?: any;
  onSearchInput?: any;
  onResultItemInput?: any;
  inputProps?: any;
  inputGroupProps?: any;
  resultContainerProps?: any;
  extraActions?: any;
  resultList?: any;
  renderResultItem?: any;
}
