import React, { useEffect, useRef } from "react";
import T from "prop-types";
import NativeLink from "./NativeLink";

const ROLE_MAP = {
  "nu-btn": "button",
  "nu-link": "link",
  "nu-cardbtn": "button",
  "nu-checkbox": "checkbox",
  "nu-switch": "switch",
  "nu-radio": "radio",
};

export default function Action({
  as,
  onTap,
  onInput,
  to,
  children,
  label,
  ...props
}) {
  const Tag = as || "nu-action";
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      if (onTap) {
        ref.current.addEventListener("tap", onTap);
      }

      if (onInput) {
        ref.current.addEventListener("input", (evt) => onInput(evt.detail));
      }
    }
  }, []);

  return (
    <Tag
      role={!to ? ROLE_MAP[as] || "button" : null}
      to={to}
      label={label}
      {...props}
    >
      {children}
      {NativeLink({ to, label, children })}
    </Tag>
  );
}

Action.propTypes = {
  onTap: T.func,
  to: T.string,
};
