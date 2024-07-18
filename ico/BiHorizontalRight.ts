import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HorizontalRight icon from BoxIcons
 * @module
 */
export function BiHorizontalRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13 11H5v2h8v3l4-4-4-4v3zM19 3h2v3h-2zM19 8h2v3h-2zM19 13h2v3h-2zM19 18h2v3h-2z"}}]})(props);
}
export default BiHorizontalRight;
