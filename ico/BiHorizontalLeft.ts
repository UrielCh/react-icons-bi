import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HorizontalLeft icon from BoxIcons
 * @module
 */
export function BiHorizontalLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m11 8-4 4 4 4v-3h8v-2h-8V8zM3 18h2v3H3zM3 13h2v3H3zM3 8h2v3H3zM3 3h2v3H3z"}}]})(props);
}
export default BiHorizontalLeft;
