import React from 'react';
import { themeAttr } from '../helpers';
import ActionElement from './Action';

export default function Button(props) {
    return ActionElement({ as: 'nu-btn', ...props });
}

Button.Group = function ButtonGroup(allProps) {
    let { children, inline, onChange,gap, ...otherProps } = allProps;

    inline = !!inline || null;
    return (
        <nu-btngroup use-radiogroup="no" theme={themeAttr(allProps)} inline={inline} group-radius="1r" border="#clear" gap={`${gap}x :inline[${gap}x]`} flow="column :inline[row]" {...otherProps}>
            {children}
        </nu-btngroup>
    );
};

Button.propTypes = ActionElement.propTypes;
