import T from 'prop-types';
import { themeAttr } from '../../helpers';
import Action from '../../Components/Action';
import Icon from '../Icon/Icon';

export default function Tag(allProps) {
  const { size = 'sm', label, deletable, theme, ...otherProps } = allProps;

  return (
    <nu-badge
      size={size}
      theme={theme || themeAttr(allProps)}
      radius="left right"
      padding="0.5x 1x 0.5x 1x"
      space="50% 0"
      {...otherProps}
    >
      {label}
      {deletable ? (
        <Action>
          <Icon name="close-outline" />
        </Action>
      ) : null}
    </nu-badge>
  );
}

Tag.propTypes = {
  size: T.string,
  label: T.string,
  deletable: T.bool,
};
