import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderOuter icon from BoxIcons
 * @module
 */
export function BiBorderOuter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 7h2v2h-2zm0 8h2v2h-2zm-4-4h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"}},{tag:"path",attr:{d:"M19 3H3v18h18V3h-2zm0 4v12H5V5h14v2z"},child:[]}]})(props);
}
export default BiBorderOuter;
