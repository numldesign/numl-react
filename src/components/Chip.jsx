import T from "prop-types";
import { themeAttr } from "../helpers";

const iconSize = {
    xs: "2",
    sm: "4",
    md: "6",
    lg: "8",
    xl: "10",
};

export default function Chip(allProps) {
    const { size = "sm", label, icon, theme } = allProps;

    return (
        <nu-badge
            size={size}
            theme={theme || themeAttr(allProps)}
            radius="4x"
            padding="0.5x 1x 0.5x 1x"
        >
            {icon}
            {label}
            <nu-icon
                size={`${iconSize[size]}x`}
                name="close-outline"
                rotate="270deg"
            />
        </nu-badge>
    );
}

Chip.propTypes = {
    size: T.string,
    label: T.string,
    icon: T.element,
};
