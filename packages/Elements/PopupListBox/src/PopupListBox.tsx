import React from 'react';

const PopupListBox = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-popuplistbox',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default PopupListBox;
