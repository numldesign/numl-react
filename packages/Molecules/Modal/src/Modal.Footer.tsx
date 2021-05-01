import { El } from '../../../entry';

/**
 * Modal Footer
 * @param props
 * @returns
 */
const ModalFooter = (props: any) => {
  const { content = 'flex-end', gap = '1x', padding = '2x', children, ...otherProps } = props;
  return (
    <El.Pane block content={content} gap={gap} padding={padding} {...otherProps}>
      {children}
    </El.Pane>
  );
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
