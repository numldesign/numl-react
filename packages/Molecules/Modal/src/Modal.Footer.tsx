import React from 'react';
import { El } from '@numl-react/core';
import { isPlainObject } from '@numl-react/utility';
import ModalContext from './ModalContext';
/**
 * Modal Footer
 * @param props
 * @returns
 */
const ModalFooterForwardRef = React.forwardRef((props: any, ref) => {
  const { content = 'flex-end', gap = '1x', padding = '2x', footerContent, children, ...otherProps } = props;
  return (
    <El.Pane block ref={ref} content={content} gap={gap} padding={padding} {...otherProps}>
      {isPlainObject(footerContent) && (footerContent.secondary || footerContent.primary) ? (
        <>
          <SecondaryAction {...footerContent.secondary}>{footerContent.secondary.text}</SecondaryAction>
          <PrimaryAction {...footerContent.primary}>{footerContent.primary.text}</PrimaryAction>
        </>
      ) : (
        [footerContent]
      )}
    </El.Pane>
  );
});
ModalFooterForwardRef.displayName = 'ModalFooter';

/**
 * Default Secondary Button for Modal
 * @param props
 * @returns
 */
const SecondaryAction = (props: any) => {
  const { children, onTap, theme = 'default', ...otherProps } = props;
  const { onCloseAction } = React.useContext(ModalContext);

  return (
    <El.Button key="secondary" onTap={onTap || onCloseAction} theme={theme} {...otherProps}>
      {children || 'Close'}
    </El.Button>
  );
};
SecondaryAction.displayName = 'SecondaryAction';

/**
 * Default Primary Button for Modal
 * @param props
 * @returns
 */
const PrimaryAction = (props: any) => {
  const { children, theme = 'special', ...otherProps } = props;
  return (
    <El.Button key="primary" theme={theme} {...otherProps}>
      {children || 'Save'}
    </El.Button>
  );
};
PrimaryAction.displayName = 'PrimaryAction';

/**
 * ModalFooter memo is exported to outer library,
 * Due to performance optimization
 */
const ModalFooter = React.memo(ModalFooterForwardRef);
ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
