export function requireNude() {
  if (typeof window === "undefined") return new Promise(() => {});

  if (window.Nude) {
    return Promise.resolve(window.Nude);
  } else {
    return new Promise((resolve) => {
      window.addEventListener("nudeReady", () => {
        resolve(window.Nude);
      });
    });
  }
}

export function extractText(html = "") {
  return html
    .replace(/\\s[\s]*/g, " ")
    .replace(/\\n\\n/g, " ")
    .replace(/\\n[\s]*/g, " ");
}

/**
 * React helper to dangerously set inner html.
 * Suitable for inserting multiline text.
 * Use \n\n symbol to add a new paragraph.
 * Use \s symbol after a word to add a non-breaking space.
 * @param html
 * @return {{dangerouslySetInnerHTML: {__html: string}}}
 */
export function insertText(html = "") {
  const multiline = !!html.match(/\\n\\n/);

  return {
    dangerouslySetInnerHTML: {
      __html: `${multiline ? "<nu-block>" : ""}${html
        .replace(/[-‑]/g, "&#8209;")
        .replace(/\\s[\s]*/g, "&nbsp;")
        .replace(/\\n\\n/g, "</nu-block><nu-block>")
        .replace(/\\n[\s]*/g, "<br/>")}${multiline ? "</nu-block>" : ""}`,
    },
  };
}

/** @copyright https://github.com/feross/clipboard-copy/blob/master/index.js */
export function copyToClipboard(text) {
  // Use the Async Clipboard API when available. Requires a secure browsing
  // context (i.e. HTTPS)
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).catch(function (err) {
      throw err !== undefined
        ? err
        : new DOMException("The request is not allowed", "NotAllowedError");
    });
  }

  // ...Otherwise, use document.execCommand() fallback

  // Put the text to copy into a <span>
  const span = document.createElement("span");
  span.textContent = text;

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = "pre";

  // Add the <span> to the page
  document.body.appendChild(span);

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection();
  const range = window.document.createRange();
  selection.removeAllRanges();
  range.selectNode(span);
  selection.addRange(range);

  // Copy text to the clipboard
  let success = false;
  try {
    success = window.document.execCommand("copy");
  } catch (err) {
    console.log("error", err);
  }

  // Cleanup
  selection.removeAllRanges();
  window.document.body.removeChild(span);

  return success
    ? Promise.resolve()
    : Promise.reject(new DOMException("The request is not allowed", "NotAllowedError"));
}

export function JsxInnerText(children, counter = 0) {
  if (typeof children === "object" && !Array.isArray(children)) {
    return JsxInnerText(children.props.children);
  }

  if (!children || typeof children === "string") return children || "";

  return children
    .reduce((str, obj) => {
      return str + " " + JsxInnerText(obj);
    }, "")
    .trim();
}

const THEME_TYPES = {
  special: "special",
  success: "success special",
  warning: "warning special",
  danger: "danger special",
};

export function themeAttr(allProps, specialAsTheme) {
  const propList = (specialAsTheme ? ["special"] : []).concat(["success", "warning", "danger"]);
  const themeType = propList.find((type) => allProps[type]);

  return THEME_TYPES[themeType];
}
