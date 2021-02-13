import T from 'prop-types';
import { themeAttr } from '../helpers';
import Action from './Action';
import Icon from './Icon';

export default function Tag(allProps) {
  const { size = 'sm', label, deletable, theme, ...otherProps } = allProps;

  return (
    <nu-badge
      size={size}
      theme={theme || themeAttr(allProps)}
      radius="left right"
      padding="0.5x 1x 0.5x 1x"
      {...otherProps}
    >
      {label}
      {deletable && (
        <Action>
          <Icon name="close-outline" />
        </Action>
      )}
    </nu-badge>
  );
}

Tag.propTypes = {
  size: T.string,
  label: T.string,
  deletable: T.bool,
};
