import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * InfoSquare icon from BoxIcons
 * @module
 */
export function BiInfoSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z"}},{tag:"path",attr:{d:"M11 7h2v2h-2zm0 4h2v6h-2z"},child:[]}]})(props);
}
export default BiInfoSquare;
