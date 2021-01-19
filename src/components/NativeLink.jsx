import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import { JsxInnerText } from '../helpers';

/**
 * This element is required to improve SEO by providing valid HTML linking between pages.
 * @param to
 * @param children
 * @return {JSX.Element|undefined}
 * @constructor
 */
export default function NativeLink({ to, label, children }) {
  const newTab = to && to.startsWith('!');
  const href = to && to.slice(newTab ? 1 : 0);
  const [showLinkText, setShowLinkText] = useState(true);

  useEffect(() => {
    setShowLinkText(false);
  });

  return href ? <a href={href} target={newTab ? '_blank' : null}>
    {showLinkText ? (label || JsxInnerText(children)) : null}
  </a> : undefined;
}

NativeLink.propTypes = {
  to: T.string.isRequired,
};
