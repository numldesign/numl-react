import { BaseProps } from '../../../Shared/NumlTypes';

export interface TResourceListProps extends BaseProps {
  selected?: any;
  multiSelect?: any;
  items?: any;
  onChange?: any;
  contentWrapperProps?: any;
  itemWrapperProps?: any;
  renderItem?: any;
}