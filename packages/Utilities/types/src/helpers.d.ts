declare global {
  interface Window {
    Nude: any;
  }
}
export declare function requireNude(): Promise<any>;
export declare function LoadNuml(): Promise<any>;
export declare function extractText(html?: string): string;
/**
 * React helper to dangerously set inner html.
 * Suitable for inserting multiline text.
 * Use \n\n symbol to add a new paragraph.
 * Use \s symbol after a word to add a non-breaking space.
 * @param html
 * @return {{dangerouslySetInnerHTML: {__html: string}}}
 */
export declare function insertText(html?: string): {
  dangerouslySetInnerHTML: {
    __html: string;
  };
};
/** @copyright https://github.com/feross/clipboard-copy/blob/master/index.js */
export declare function copyToClipboard(text: any): Promise<void>;
export declare function JsxInnerText(children: any): any;
