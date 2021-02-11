import React, { useRef, useEffect } from 'react';
import { themeAttr } from '../helpers';
import ActionElement from './Action';

export default function Button(props) {
    return ActionElement({ as: 'nu-btn', ...props });
}

Button.Group = function ButtonGroup(allProps) {
    const ref = useRef();
    let { disabled, children, inline, onChange, ...otherProps } = allProps;

    disabled = !!disabled || null;
    inline = !!inline || null;

    useEffect(() => {
        if (ref.current && onChange) {
            ref.current.addEventListener('change', (evt) => onChange(evt.detail));
        }
    }, []);

    return (
        <nu-radiogroup theme={themeAttr(allProps)} disabled={disabled} inline={inline} group-radius="1r" border="#clear" gap="1x:inline[2x]" flow="column :inline[row]" {...otherProps}>
            {children}
        </nu-radiogroup>
    );
};

Button.propTypes = ActionElement.propTypes;
