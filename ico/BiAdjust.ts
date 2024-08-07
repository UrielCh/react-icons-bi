import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Adjust icon from BoxIcons
 * @module
 */
export function BiAdjust(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"}},{tag:"path",attr:{d:"M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"},child:[]}]})(props);
}
export default BiAdjust;
