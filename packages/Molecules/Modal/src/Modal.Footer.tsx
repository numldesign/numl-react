import React from 'react';
import { El } from '../../../entry';
import { isPlainObject } from '../../../Utilities';
/**
 * Modal Footer
 * @param props
 * @returns
 */
const ModalFooter = (props: any) => {
  const { content = 'flex-end', gap = '1x', padding = '2x', footerActions, children, ...otherProps } = props;

  return (
    <El.Pane block content={content} gap={gap} padding={padding} {...otherProps}>
      {isPlainObject(footerActions) ? (
        <>
          <SecondaryAction {...footerActions.secondary}>{footerActions.secondary.text}</SecondaryAction>
          <PrimaryAction {...footerActions.primary}>{footerActions.primary.text}</PrimaryAction>
        </>
      ) : (
        [footerActions]
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
  const { children, theme = 'default', ...otherProps } = props;
  return (
    <El.Button key="secondary" theme={theme} {...otherProps}>
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
