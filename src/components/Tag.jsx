import T from "prop-types";
import { themeAttr } from "../helpers";
import ActionElement from './Action';


export default function Tag(allProps) {
    let { size = "sm", label, deletable, theme } = allProps;
    deletable = !!deletable || false;

    const iconProps = {
        name: "close-outline"
    }
    return (
        <nu-badge
            size={size}
            theme={theme || themeAttr(allProps)}
            radius="left right"
            padding="0.5x 1x 0.5x 1x"
        >
            {label}
            {deletable && ActionElement({ as: 'nu-icon', ...iconProps })}
        </nu-badge>
    );
}

Tag.propTypes = {
    ...ActionElement.propTypes,
    size: T.string,
    label: T.string,
    deletable: T.bool,
};
