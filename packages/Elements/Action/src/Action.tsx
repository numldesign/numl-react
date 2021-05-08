import React from 'react';

const Action = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-action',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Action;

// const ROLE_MAP: any = {
//   'nu-btn': 'button',
//   'nu-link': 'link',
//   'nu-Actionbtn': 'button',
//   'nu-checkbox': 'checkbox',
//   'nu-switch': 'switch',
//   'nu-radio': 'radio',
// };

// function Action(allProps: any): {
//   let { as, onTap, onInput, to, children, label, ...otherProps } = allProps;
//   const Tag = as || 'nu-action';
//   const ref: any = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       if (onTap) {
//         ref.current.addEventListener('tap', onTap);
//       }

//       if (onInput) {
//         ref.current.addEventListener('input', (evt: any) => onInput(evt.detail));
//       }
//     }
//   }, []);

//   return (
//     <Tag ref={ref} role={!to ? ROLE_MAP[as] || 'button' : null} to={to} label={label} {...otherProps}>
//       {children}
//       {NativeLink({ to, label, children })}
//     </Tag>
//   );
// }

// Action.propTypes = {
//   onTap: T.func,
//   to: T.string,
// };

// export default Action;
