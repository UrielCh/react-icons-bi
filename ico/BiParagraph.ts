import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Paragraph icon from BoxIcons
 * @module
 */
export function BiParagraph(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 16h2v4h2V6h2v14h2V6h3V4H9c-3.309 0-6 2.691-6 6s2.691 6 6 6zM9 6h2v8H9c-2.206 0-4-1.794-4-4s1.794-4 4-4z"}}]})(props);
}
export default BiParagraph;
