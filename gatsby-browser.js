/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import wrapWithProvider from './with-provider';

export const wrapRootElement = wrapWithProvider;

(async () => {
  if (!window.ResizeObserver) {
    window.ResizeObserver = (await import('resize-observer-polyfill')).default;
  }
})()
