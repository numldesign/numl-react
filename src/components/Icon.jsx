import T from "prop-types";

export default function Icon(allProps) {
  return <nu-icon {...allProps} />;
}

Icon.propTypes = {
  name: T.string,
};
