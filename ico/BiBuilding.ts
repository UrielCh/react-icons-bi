import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Building icon from BoxIcons
 * @module
 */
export function BiBuilding(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 2H6c-1.103 0-2 .897-2 2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm0 18H6V4h12v16z"}},{tag:"path",attr:{d:"M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 .031h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z"},child:[]}]})(props);
}
export default BiBuilding;
