import * as React from 'react';
import { El } from '../../../entry';

let Modal: any = React.forwardRef((props, ref: any) => {
  const {
    heading,
    onCloseAction,
    place = 'inside',
    fill = 'bg',
    box = 'y',
    show = 'n',
    radius = '0.5',
    children,
    onTap,
    body,
    footerActions,
    closeAction,
    ...otherProps
  }: any = props;

  React.useEffect(() => {
    if (ref && ref.current) {
      console.log(ref);
      onTap && ref.current.addEventListener('tap', onTap);
      return () => {
        onTap ? ref.current.removeEventListener('tap', onTap) : null;
      };
    }
  }, [ref]);

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
      {heading && <Modal.Header flex heading={heading} onCloseAction={onCloseAction}></Modal.Header>}

      {body ? <Modal.Body> {body} </Modal.Body> : { ...children }}

      {footerActions && <Modal.Footer> {footerActions} </Modal.Footer>}
    </El.Block>
  );
});
Modal.displayName = 'Modal';

/***
 * Modal Header
 */
const ModalHeader = (props: any) => {
  const {
    padding = '2x',
    items = 'start',
    content = 'space-between',
    border = 'bottom',
    gap = '1',
    heading,
    onCloseAction,
    children,
    ...otherProps
  }: any = props;
  return (
    <El.Pane block items={items} content={content} border={border} padding={padding} gap={gap} {...otherProps}>
      {typeof heading === 'string' ? <El.Base size="md">{heading}</El.Base> : heading}
      {onCloseAction ? (
        <El.Button
          cursor="pointer"
          border="0"
          onClick={() => {
            onCloseAction;
          }}
        >
          <El.Icon size="md" name="close-outline"></El.Icon>
        </El.Button>
      ) : null}
    </El.Pane>
  );
};
ModalHeader.displayName = 'ModalHeader';
Modal.Header = ModalHeader;

/**
 * Modal Body
 * @param props
 * @returns
 */
const ModalBody = function (props: any) {
  const { padding = '2x', border = 'bottom', items = 'start', children, ...otherProps } = props;
  return (
    <El.Pane block border={border} items={items} padding={padding} {...otherProps}>
      {children}
    </El.Pane>
  );
};
ModalBody.displayName = 'ModalBody';
Modal.Body = ModalBody;

/**
 * Modal Footer
 * @param props
 * @returns
 */
const ModalFooter = function (props: any) {
  const { content = 'flex-end', gap = '1x', padding = '2x', children, ...otherProps } = props;
  return (
    <El.Pane block content={content} gap={gap} padding={padding} {...otherProps}>
      {children}
    </El.Pane>
  );
};
ModalFooter.displayName = 'ModalFooter';
Modal.Footer = ModalFooter;

export default Modal;
