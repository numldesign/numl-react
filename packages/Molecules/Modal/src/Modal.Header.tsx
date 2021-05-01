import * as React from 'react';
import { El } from '../../../entry';
import ModalContext from './ModalContext';

/***
 * Modal Header
 */
const ModalHeaderForwardRef = React.forwardRef((props: any, ref) => {
  const { onCloseAction } = React.useContext(ModalContext);

  const {
    padding = '1x 2x',
    items = 'center',
    content = 'space-between',
    border = 'bottom',
    gap = '1',
    heading,
    children,
    ...otherProps
  }: any = props;
  return (
    <El.Pane
      block
      ref={ref}
      items={items}
      content={content}
      border={border}
      padding={padding}
      gap={gap}
      {...otherProps}
    >
      {typeof heading === 'string' ? (
        <El.Block size="md" text="middle">
          {heading}
        </El.Block>
      ) : (
        heading
      )}
      {onCloseAction ? (
        <El.Button cursor="pointer" border="0" onTap={onCloseAction}>
          <El.Icon size="md" name="close-outline"></El.Icon>
        </El.Button>
      ) : null}
    </El.Pane>
  );
});
ModalHeaderForwardRef.displayName = 'ModalHeader';

/**
 * ModalHeader memo is exported to outer library,
 * Due to performance optimization
 */
const ModalHeader = React.memo(ModalHeaderForwardRef);
ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
