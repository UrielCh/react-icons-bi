import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VerticalBottom icon from BoxIcons
 * @module
 */
export function BiVerticalBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 19h3v2h-3zM13 19h3v2h-3zM8 19h3v2H8zM3 19h3v2H3zM13 5h-2v8H8l4 4 4-4h-3V5z"}}]})(props);
}
export default BiVerticalBottom;
