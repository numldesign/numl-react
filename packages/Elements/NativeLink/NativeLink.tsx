import T from 'prop-types';
import React, { useEffect, useState } from 'react';
import { JsxInnerText } from './../../helpers';
import { TNativeLinkProps } from './NativeLink.type';

/**
 * This element is required to improve SEO by providing valid HTML linking between pages.
 * @param to
 * @param children
 * @return {JSX.Element|undefined}
 * @constructor
 */
function NativeLink(allProps: TNativeLinkProps) {
  let { to, label, children } = allProps;
  const newTab = to && to.startsWith('!');
  const href = to && to.slice(newTab ? 1 : 0);
  const [showLinkText, setShowLinkText] = useState(true);

  useEffect(() => {
    setShowLinkText(false);
  });

  return href ? (
    <a href={href} target={newTab ? '_blank' : undefined}>
      {showLinkText ? label || JsxInnerText(children) : null}
    </a>
  ) : undefined;
}

NativeLink.propTypes = {
  to: T.string.isRequired,
};

export default NativeLink;
