import T from "prop-types";
export default function Icon(allProps) {
    let { name, ...otherProps } = allProps;
    return <nu-icon name={name} {...otherProps}></nu-icon>;
}

Icon.propTypes = {
    value: T.bool,
};