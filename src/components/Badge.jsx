import T from "prop-types";
import { themeAttr } from "../helpers";
export default function Badge(allProps) {
    const { size = "xs", label, icon } = allProps;
    return (
        <nu-badge
            size={size}
            theme={themeAttr(allProps)}
            radius="4x"
            padding="0.5x 1x 0.5x 1x"
        >
            {icon}
            {label}
        </nu-badge>
    );
}

Badge.propTypes = {
    size: T.string,
    label: T.string,
    icon: T.element,
};
