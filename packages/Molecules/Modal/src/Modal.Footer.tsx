import React from 'react';
import { El } from '../../../entry';
import { isPlainObject } from '../../../Utilities';
import ModalContext from './ModalContext';
/**
 * Modal Footer
 * @param props
 * @returns
 */
const ModalFooter = (props: any) => {
  const { content = 'flex-end', gap = '1x', padding = '2x', footerContent, children, ...otherProps } = props;
  return (
    <El.Pane block content={content} gap={gap} padding={padding} {...otherProps}>
      {isPlainObject(footerContent) ? (
        <>
          <SecondaryAction {...footerContent.secondary}>{footerContent.secondary.text}</SecondaryAction>
          <PrimaryAction {...footerContent.primary}>{footerContent.primary.text}</PrimaryAction>
        </>
      ) : (
        [footerContent]
      )}
    </El.Pane>
  );
};
ModalFooter.displayName = 'ModalFooter';

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

export default ModalFooter;
