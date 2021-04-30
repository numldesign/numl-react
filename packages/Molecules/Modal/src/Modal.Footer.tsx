import { El } from '../../../entry';

/**
 * Modal Footer
 * @param props
 * @returns
 */
const ModalFooterFactory = React.forwardRef((props: any, ref) => {
  const { content = 'flex-end', gap = '1x', padding = '2x', children, ...otherProps } = props;
  return (
    <El.Pane ref={ref} block content={content} gap={gap} padding={padding} {...otherProps}>
      {children}
    </El.Pane>
  );
});

ModalFooterFactory.displayName = 'ModalFooter';
const ModalFooter = React.memo(ModalFooterFactory);

export default ModalFooter;
