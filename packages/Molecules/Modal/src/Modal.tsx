import * as React from 'react';
import { El } from '../../../entry';
import ModalBody from './Modal.Body';
import ModalFooter from './Modal.Footer';
import ModalHeader from './Modal.Header';
import ModalContext from './ModalContext';

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
    width = '50',
    show = 'n',
    radius = '0.5',
    children,
    body,
    footerContent,
    ...otherProps
  }: any = props;

  return (
    <ModalContext.Provider
      value={{
        onCloseAction,
        footerContent,
        show,
      }}
    >
      <El.Block
        ref={ref}
        shadow
        nu-overlay
        place={place}
        width={width}
        fill={fill}
        box={box}
        radius={radius}
        show={show}
        {...otherProps}
      >
        {heading && <ModalHeader flex heading={heading}></ModalHeader>}

        {body ? <ModalBody> {body} </ModalBody> : [...children]}

        {footerContent && <ModalFooter footerContent={footerContent}></ModalFooter>}
      </El.Block>
    </ModalContext.Provider>
  );
});
ModalForwardRef.displayName = 'Modal';

/**
 * Modal memo is exported to outer library,
 * Due to performance optimization
 */
let Modal = React.memo(ModalForwardRef);

export default Modal;
