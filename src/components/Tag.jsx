import T from "prop-types";
import { themeAttr } from "../helpers";

const iconSize = {
    xs: "2",
    sm: "4",
    md: "6",
    lg: "8",
    xl: "10",
};

export default function Tag(allProps) {
    let { size = "xs", label, showicon } = allProps;
    showicon = !!showicon || false;
    return (
        <nu-badge
            size={size}
            theme={themeAttr(allProps)}
            radius="left right"
            padding="0.5x 1x 0.5x 1x"
        >
            {label}
            {showicon && (
                <nu-icon
                    size={`${iconSize[size]}x`}
                    name="close-outline"
                    rotate="270deg"
                />
            )}
        </nu-badge>
    );
}

Tag.propTypes = {
    size: T.string,
};
