import * as React from 'react';
import { El } from '../../../entry';
import ModalBody from './Modal.Body';
import ModalFooter from './Modal.Footer';
import ModalHeader from './Modal.Header';

/**
 * Forwad reference is used to get reference of element
 * from numldesign - webcomponents
 */
const ModalForwardRef = React.forwardRef((props: any, ref: any) => {
  const {
    heading,
    onCloseAction,
    place = 'inside',
    fill = 'bg',
    box = 'y',
    show = 'n',
    radius = '0.5',
    children,
    body,
    footerActions,
    closeAction,
    ...otherProps
  }: any = props;

  return (
    <El.Block
      ref={ref}
      shadow
      nu-overlay
      place={place}
      fill={fill}
      box={box}
      radius={radius}
      show={show}
      {...otherProps}
    >
      {heading && <ModalHeader flex heading={heading} onCloseAction={onCloseAction}></ModalHeader>}

      {body ? <ModalBody> {body} </ModalBody> : { ...children }}

      {footerActions && <ModalFooter footerActions={footerActions}></ModalFooter>}
    </El.Block>
  );
});
ModalForwardRef.displayName = 'Modal';

/**
 * Modal memo is exported to outer library,
 * Due to performance optimization
 */
const Modal = React.memo(ModalForwardRef);
Modal.displayName = 'Modal';

export default Modal;
